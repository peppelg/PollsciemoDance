function merde() {
  songz = new Audio("songz.mp3")
  songz.controls = false
  songz.loop = true
  songz.autoplay = true
  songz.play()
  setInterval(function () {
    $('html').css("background-color", "blue")
    setTimeout(function () {
      $('html').css("background-color", "red")
    }, 50)
  }, 100)
}
$(document).on('touchmove', false);
var wharz = 1
setTimeout(function() {
  $('#smerde').text('We is chiamando Pollsciemo...')
  wharz = setInterval(function(){
    $('#pollsciemi').prepend('<img src="pollsciemo.png" height=200 width=200>')
  }, 500)
}, 3000)
setTimeout(function() {
  $('#smerde').text('Jes, u ar owned by Pollsciemo...')
}, 10000)
setTimeout(function() {
  $('#smerde').text('Habballiam??')
}, 15000)
setTimeout(function() {
  clearTimeout(wharz)
  $('img').attr('class','OPSE')
  merde()
}, 18000)
