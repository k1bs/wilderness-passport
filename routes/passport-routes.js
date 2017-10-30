const express = require('express')
const passportRouter = express.Router()

const passportController = require('../controllers/passport-controller')

passportRouter.get('/', passportController.index)
passportRouter.post('/', passportController.create)

passportRouter.delete('/:id', passportController.delete)

module.exports = passportRouter
