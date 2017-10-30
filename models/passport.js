const db = require('../db/config')

const Passport = {}

Passport.findAll = () => {
  return db.manyOrNone(`
      SELECT * FROM users_parks
    `)
}

Passport.findById = (id) => {
  return db.one(`
      SELECT * FROM users_parks
      WHERE id = $1
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

Passport.destroy = (id) => {
  return db.none(`
      DELETE FROM users_parks
      WHERE id = $1
    `, [id])
}

module.exports = Passport
