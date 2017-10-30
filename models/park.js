const db = require('../db/config')

const Park = {}

Park.createSeveral = (parks) => {
  return db.tx((t) => {
    const queries = parks.map((park) => {
      return db.one(`
          INSERT INTO parks (code, name, states, lat_long, description, designation, directions_url, url)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING *
        `, [park.parkCode, park.fullName, park.states, park.latLong, park.description, park.designation, park.directionsUrl, park.url])
    })
    return t.batch(queries)
  })
}

Park.findAll = () => {
  return db.manyOrNone(`
      SELECT * FROM parks
    `)
}

Park.findByState = ()

module.exports = Park
