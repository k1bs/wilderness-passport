const bcrypt = require('bcryptjs')
const Passport = require('../models/passport')

const passportController = {}

passportController.index = (req, res) => {
  Passport.findAll()
    .then((passport) => {
      res.render('passport/passport-index', {
        passport: passport,
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

module.exports = passportController
