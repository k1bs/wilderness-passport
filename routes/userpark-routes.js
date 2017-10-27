const express = require('express')
const userParksRouter = express.Router()

const userParksController = require('../controllers/userparks-controller')

userParksRouter.get('/', userParksController.index)

module.exports = userParksRouter
