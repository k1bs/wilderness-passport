const db = require('../db/config')

const Park = {}

Park.createSeveral = (parks) => {
  return db.tx((t) => {
    const queries = parks.map((park) => {
      return db.one(`
          INSERT INTO parks (code, name, states, lat_long, description, designation, directions_info, directions_url, url, weather_info)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING *
        `, [park.parkCode, park.fullName, park.states, park.latLong, park.description, park.designation, park.directionsInfo, park.directionsUrl, park.url, park.weatherInfo])
    })
    return t.batch(queries)
  })
}

Park.findAll = () => {
  return db.manyOrNone(`
      SELECT * FROM parks
    `)
}

module.exports = Park
