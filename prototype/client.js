var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
console.log('cool')
var img = image();
img.onload = function() {
  ctx.drawImage(img, 0, 0);
}
img.src = "message.svg";
