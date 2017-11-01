require('isomorphic-fetch')

fetch(`https://developer.nps.gov/api/v1/parks?limit=700&api_key=gDKQJkJeSBRhctCt3ZjfDTbYEymNlBXjMBClH5YF`)
  .then((response) => {
    response.json()
  }).then((textRes) => {
    console.log(textRes)
  }).catch((err) => {
    console.log(err)
  })
