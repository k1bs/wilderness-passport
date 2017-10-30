const Park = require('../models/park')

const parksController = {}

parksController.initialInit = (req, res) => {
  Park.createSeveral(res.locals.parksArray)
    .then((insertData) => {
      console.log(insertData)
      res.status(200).redirect('/')
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

parksController.index = (req, res) => {
  Park.findAll()
    .then((parks) => {
      res.render('park/park-index', {
        parks: parks,
      })
    }).catch((err) => {
      console.log(err)
      res.status(500).json({error: err})
    })
}

module.exports = parksController
