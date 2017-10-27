const bcrypt = require('bcryptjs')
const UserPark = require('../models/userpark')

const userParksController = {}

userParksController.index = (req, res) => {
  UserPark.findAll(req.user.id)
    .then((userparks) => {
      res.render('usersparks/usersparks-index', {
        userparks: userparks,
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

module.exports = userParksController
