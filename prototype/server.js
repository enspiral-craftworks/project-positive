var gm = require('gm')

var complimentSvg = 'assets/compliments/1.svg'
var complimentPng = 'assets/compliments/1.png'
var backgroundPng = 'assets/backgrounds/1.png'
var compositePng = 'assets/composites/1-1.png'

gm(complimentSvg)
  .background('none')
  .write(complimentPng, function(err1) {
  !!err1 ? console.log(err1) : console.log('converted')

  gm(backgroundPng)
    .composite(complimentPng)
    .write(compositePng, function(err2) {
      !!err2 ? console.log(err2) : console.log('composited')
    })
})

