/* 
 * Yes, this is horrible code with globals leaking everywhere and using
 * those globals as shared state. Fortunately this is truely throw-away
 * code that aims to illustrate a way to load SVG content and change all
 * of the fill colours in an SVG doc. Feel free to borrow the approach,
 * just not the code as it is here. It's been written generically against
 * the DOM with no dependencies on external libraries.
 */

var red = document.getElementById('red')
var blue = document.getElementById('blue')
var sweat = document.getElementById('sweat')
var kiakaha = document.getElementById('kiakaha')

var config = {
  'red': '#FF0000',
  'blue': '#0000FF',
  'sweat': '/assets/compliments/1.svg',
  'kiakaha': '/assets/compliments/2.svg',
  'activeColour': ''
}

red.addEventListener('click', changeColour, false)
blue.addEventListener('click', changeColour, false)
sweat.addEventListener('click', downloadCompliment, false)
kiakaha.addEventListener('click', downloadCompliment, false)

function changeColour(e) {
  var colour = config[e.currentTarget.id]
  config.activeColour = colour
  applyColourChange()
}

function downloadCompliment(e) {
  var xhr = new XMLHttpRequest();
  var url = config[e.currentTarget.id]
  xhr.open('GET', url, true);
  xhr.responseType = 'document';
  xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        showCompliment(xhr.response.documentElement)
      }
    }
  };
  xhr.send();
}

function showCompliment(svg) {
  var complimentNode = document.getElementById('compliment')
  var oldCompliment = complimentNode.childNodes[0]
  if(oldCompliment) {
    complimentNode.removeChild(oldCompliment)
  }

  complimentNode.appendChild(svg)

  if(config.activeColour) {
    applyColourChange()
  }
}

function applyColourChange() {
  var complimentNode = document.getElementById('compliment')
  var svg = complimentNode.childNodes[0]
  colourChildren(svg)
}

function colourChildren(node) {
  if(!node.childNodes.length) return
  for(var i = 0; i < node.childNodes.length; i++) {
    var child = node.childNodes[i]
    if(child.style && child.style.fill) {
      child.style.fill = config.activeColour
    }
    colourChildren(child)
  }
}

