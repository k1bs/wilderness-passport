$(function () {
  console.log('up and running')
  setTimeout(() => {
    $('#first-line').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 700)
  },1000)
  setTimeout(() => {
    $('#second-line').css({opacity: 0.0, visibility: 'visible'}).animate({opacity: 1.0}, 700)
  },2500)
})
