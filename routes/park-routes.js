const express = require('express')
const parkRouter = express.Router()

const parksController = require('../controllers/parks-controller')
const parksHelpers = require('../services/parks/parks-helpers')
const geoHelpers = require('../services/geo/geo-helpers')
const reqHelpers = require('../services/req/req-helpers')

parkRouter.get('/', parksController.index)
parkRouter.get('/parksinit', parksHelpers.parksInitialFetch, parksController.initialInit)

parkRouter.post('/search', reqHelpers.nullToJunk, geoHelpers.getStateFromAddress, parksController.findByStateOrName)

module.exports = parkRouter
