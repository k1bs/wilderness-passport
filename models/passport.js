const db = require('../db/config')

const Passport = {}

Passport.findAll = (userid) => {
  return db.manyOrNone(`
      SELECT * FROM users_parks
      JOIN parks ON users_parks.park_id = parks.id
      WHERE users_parks.user_id = $1
    `, [userid])
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
      (park_id, user_id, visited)
      VALUES ($1, $2, false)
      RETURNING *
    `, [parkid, userid])
}

Passport.destroy = (parkid) => {
  return db.none(`
      DELETE FROM users_parks
      WHERE passport_id = $1
    `, [parkid])
}

Passport.visitToggle = (parkid) => {
  return db.one(`
      UPDATE users_parks
      SET visited = NOT visited
      WHERE passport_id = $1
      RETURNING *
    `, [parkid])
}

module.exports = Passport
