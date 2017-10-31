const express = require('express')
const passportRouter = express.Router()

const passportController = require('../controllers/passport-controller')
const authHelpers = require('../services/auth/auth-helpers')

passportRouter.get('/', authHelpers.loginRequired, passportController.index)
passportRouter.post('/', authHelpers.loginRequired, passportController.create)

passportRouter.get('/:id', authHelpers.loginRequired, passportController.show)

passportRouter.delete('/:id', authHelpers.loginRequired, passportController.delete)

module.exports = passportRouter
