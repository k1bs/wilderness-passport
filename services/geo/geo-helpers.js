require('isomorphic-fetch')

function getStateFromAddress (req, res, next) {
  if (!req.body.address) {
    console.log('No req.body.address found')
    res.locals.state = 'asdcasrhjackjlsdharjkaearalcns'
    next()
  } else {
    console.log('found req.body.address')
    console.log(req.body.address)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}&key=${process.env.GOOGLE_API_KEY}`)
      .then((response) => response.json())
      .then((jsonRes) => {
        console.log(jsonRes)
        if (jsonRes.status === 'ZERO_RESULTS') {
          res.locals.state = 'aesakhsdakjrehasdc'
          next()
        } else {
          jsonRes.results[0].address_components.forEach((result) => {
            if (result.types[0] == 'administrative_area_level_1') {
              res.locals.state = result.short_name
              next()
            }
          })
        }
      }).catch((err) => {
        console.log(err)
        next(err)
      })
  }
}

module.exports = {
  getStateFromAddress: getStateFromAddress,
}
