const Park = require('../models/park')

const parksController = {}

parksController.initialInit = (req, res) => {
  Park.createSeveral(res.locals.parksArray)
    .then((insertData) => {
      console.log(insertData)
      res.status(200).redirect('/')
    })
}

module.exports = parksController
