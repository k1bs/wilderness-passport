const bcrypt = require('bcryptjs')
const User = require('../models/user')

const usersController = {}

usersController.index = (req, res) => {
  User.findByUserName(req.user.username)
    .then((user) => {
      res.render('user/user-index', {
        user: req.user,
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(req.body.password, salt)
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    zip: req.body.zip,
  }).then((user) => {
    req.login(user, (err) => {
      if (err) return next(err)
      res.redirect('/user')
    })
  }).catch((err) => {
    console.log(err)
    res.status(500).json({error: err})
  })
}

module.exports = usersController
