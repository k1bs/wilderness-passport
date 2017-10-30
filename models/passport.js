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

module.exports = Passport
