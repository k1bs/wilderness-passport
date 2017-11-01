require('isomorphic-fetch')

function getUrlByPark {
  fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${}&image_type=photo`)
}

module.exports = {
  getUrlByPark: getUrlByPark,
}
