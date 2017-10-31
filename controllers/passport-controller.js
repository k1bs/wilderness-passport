const bcrypt = require('bcryptjs')
const Passport = require('../models/passport')
const parksHelpers = require('../services/parks/parks-helpers')
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
      res.render('passport/passport-show', {
        userpark: userpark,
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
