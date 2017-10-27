const db = require('../db/config')

const UserPark = {}

UserPark.findAll = () => {
  return db.manyOrNone(`
      SELECT * FROM users_parks
    `)
}

module.exports = UserPark
