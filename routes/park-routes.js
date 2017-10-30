const express = require('express')
const parkRouter = express.Router()

const parksController = require('../controllers/parks-controller')
const parksHelpers = require('../services/parks/parks-helpers')

parkRouter.get('/', parksController.index)
parkRouter.get('/parksinit', parksHelpers.parksInitialFetch, parksController.initialInit)


module.exports = parkRouter
