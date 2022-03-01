var c = document.querySelector("#lienzo");
var ctx = c.getContext("2d");

ctx.font = "bold 20px Verdana";
ctx.fillStyle = "#003050"
ctx.fillText("25s", 460, 50);

ctx.font = "bold 20px Verdana";
ctx.fillStyle = "#003050"
ctx.fillText("Puntos: 100pts", 800, 50);

let corazon1 = new Image();
corazon1.src = 'img/corazon.png';
corazon1.onload = function () {
	/* ave, posx, posy, ancho, alto */
	ctx.drawImage(corazon1, 35, 33, 30, 27);
};
let corazon2 = new Image();
corazon2.src = 'img/corazon.png';
corazon2.onload = function () {
	/* ave, posx, posy, ancho, alto */
	ctx.drawImage(corazon2, 70, 33, 30, 27);
};
let corazon3 = new Image();
corazon3.src = 'img/corazon.png';
corazon3.onload = function () {
	/* ave, posx, posy, ancho, alto */
	ctx.drawImage(corazon3, 105, 33, 30, 27);
};

let reloj = new Image();
reloj.src = 'img/reloj.png';
reloj.onload = function () {
	/* ave, posx, posy, ancho, alto */
	ctx.drawImage(reloj, 420, 27, 30, 30);
};

/*
900 
813 27
*/