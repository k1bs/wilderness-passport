function nullToJunk (req, res, next) {
  if (!req.body.address) {
    req.body.address = 'asdkjnalkjcksajl'
  }
  if (!req.body.name) {
    req.body.name = 'asdkjnalkjcksajl'
  }
  next()
}

module.exports = {
  nullToJunk: nullToJunk,
}
