const express = require('express')
const parkRouter = express.Router()

const parksController = require('../controllers/parks-controller')
const parksHelpers = require('../services/parks/parks-helpers')
const authHelpers = require('../services/auth/auth-helpers')
const geoHelpers = require('../services/geo/geo-helpers')
const reqHelpers = require('../services/req/req-helpers')

parkRouter.get('/', authHelpers.loginRequired, parksController.index)
parkRouter.get('/parksinit', authHelpers.loginRequired, parksHelpers.parksInitialFetch, parksController.initialInit)

parkRouter.post('/search', authHelpers.loginRequired, reqHelpers.nullToJunk, geoHelpers.getStateFromAddress, parksController.findByStateOrName)

module.exports = parkRouter
