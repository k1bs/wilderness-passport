const db = require('../db/config')

const UserPark = {}

UserPark.findAll = (userId) => {
  return db.manyOrNone(`
      SELECT * FROM users_parks
      WHERE user_id = $1
    `, [userId])
}

module.exports = UserPark
