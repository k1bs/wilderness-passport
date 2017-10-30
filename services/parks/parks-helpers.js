require('isomorphic-fetch')

function parksInitialFetch(req, res, next) {
  fetch(`https://developer.nps.gov/api/v1/parks?limit=700&api_key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(jsonRes => {
      res.locals.parksArray = jsonRes.data
      next()
    }).catch((err) => {
      console.log(err)
      next(err)
    })
}

function getAlerts(req, res, next) {
  fetch(`https://developer.nps.gov/api/v1/alerts?parkCode=${req.body.code}&limit=5&api_key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(jsonRes => {
      res.locals.alertsArray = jsonRes.data
      next()
    }).catch((err) => {
      console.log(err)
      next(err)
    })
}

function getEvents(req, res, next) {
  fetch(`https://developer.nps.gov/api/v1/events?parkCode=${req.body.code}&limit=5&api_key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(jsonRes => {
      res.locals.eventsArray = jsonRes.data
      next()
    }).catch((err) => {
      console.log(err)
      next(err)
    })
}

function getArticles (req, res, next) {
  fetch(`https://developer.nps.gov/api/v1/articles?limit=100&start=1790&api_key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(jsonRes => {
      res.locals.tempArray = jsonRes.data
      res.locals.articlesArray = res.locals.tempArray.reverse()
      next()
    }).catch((err) => {
      console.log(err)
      next(err)
    })
}

module.exports = {
  parksInitialFetch: parksInitialFetch,
}
