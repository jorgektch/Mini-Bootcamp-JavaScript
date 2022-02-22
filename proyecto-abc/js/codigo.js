var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

var fondo = new Image();
fondo.src = "./img/fondo.png";

fondo.onload = function(){
	ctx.drawImage(fondo, 0, 0);
}