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

module.exports = {
  parksInitialFetch: parksInitialFetch,
}
