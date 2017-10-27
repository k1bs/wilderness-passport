const express = require('express')
const passportRouter = express.Router()

const passportController = require('../controllers/passport-controller')

passportRouter.get('/', passportController.index)

module.exports = passportRouter
