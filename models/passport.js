const db = require('../db/config')

const Passport = {}

Passport.findAll = () => {
  return db.manyOrNone(`
      SELECT * FROM users_parks
      JOIN parks ON users_parks.park_id = parks.id
    `)
}

Passport.findById = (id) => {
  return db.one(`
      SELECT * FROM users_parks
      JOIN parks ON users_parks.park_id = parks.id
      WHERE users_parks.passport_id = $1
    `, [id])
}

Passport.create = (parkid, userid) => {
  return db.one(`
      INSERT INTO users_parks
      (park_id, user_id)
      VALUES ($1, $2)
      RETURNING *
    `, [parkid, userid])
}

Passport.destroy = (parkid) => {
  return db.none(`
      DELETE FROM users_parks
      WHERE passport_id = $1
    `, [parkid])
}

module.exports = Passport
