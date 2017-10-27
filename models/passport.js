const db = require('../db/config')

const Passport = {}

Passport.findAll = () => {
  return db.manyOrNone(`
      SELECT * FROM users_parks
    `)
}

module.exports = Passport
