const bcrypt = require('bcryptjs')
const Passport = require('../models/passport')
const parksHelpers = require('../services/parks/parks-helpers')
// const pixHelpers = require('../services/pix/pix-helpers')
require('isomorphic-fetch')

const passportController = {}

passportController.index = (req, res) => {
  Passport.findAll(req.user.id)
    .then((passport) => {
      res.render('passport/passport-index', {
        passport: passport,
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

passportController.show = (req, res) => {
  Passport.findById(req.params.id)
    .then((userpark) => {
      let alertRequest = fetch(`https://developer.nps.gov/api/v1/alerts?parkCode=${userpark.code}&api_key=${process.env.PARK_API_KEY}`).then(res => res.json())
      let picRequest = fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${userpark.code}&fields=images&api_key=${process.env.PARK_API_KEY}`).then(res => res.json())
      return Promise.all([userpark, alertRequest, picRequest])
    })
    .then((promiseArray) => {
      console.log(promiseArray[1])
      res.render('passport/passport-show', {
        userpark: promiseArray[0],
        alertRequest: promiseArray[1],
        picRequest: promiseArray[2],
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

passportController.create = (req, res) => {
  Passport.create(parseInt(req.body.parkid), req.user.id)
    .then(() => {
      res.redirect('/passport')
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

passportController.delete = (req, res) => {
  Passport.destroy(parseInt(req.body.parkid), req.user.id)
    .then(() => {
      res.redirect('/passport')
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

passportController.update = (req, res) => {
  Passport.visitToggle(req.params.id)
    .then((userpark) => {
      res.redirect(`/passport/${userpark.passport_id}`)
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

module.exports = passportController
