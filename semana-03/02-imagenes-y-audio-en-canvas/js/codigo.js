/* const permite declarar una variable que no se puede mofidicar */
/* Guardo el canvas en la variable c */
const c = document.querySelector("#lienzo");
const ctx = c.getContext("2d");

/* console.log(ctx); */

/* Rectanguilo c/relleno. Posicion x, y, ancho y alto*/
/*
Formatos de colores
- Por nombre -> 'red', 'green', ...
- Por codigo hexadecimal -> '#003050', '#00A5B6'
- Por canales rgba -> 'rgba(0,0,255,.75)'
  (r: red, g: green, b: blue, a: alpha/opacidad)
  (r,g,b -> entre 0 y 255)
  (a -> entre 0 y 100% -> entre 0 y 1)
*/

/*
ctx.fillStyle = 'rgba(0,0,255,0.8)';
ctx.fillRect(0,0,500,250);
*/

/*
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.strokeRect(500,250,500,250);
*/

/*
ctx.fillStyle = '#D76EC8';
ctx.fillRect(0,0,100,100);
ctx.fillStyle = '#CA4BB8';
ctx.fillRect(50,50,100,100);
ctx.fillStyle = '#961D85';
ctx.fillRect(100,100,100,100);
ctx.fillStyle = '#660B59';
ctx.fillRect(150,150,100,100);

ctx.fillStyle = 'yellow';
ctx.fillRect(500, 0, 500, 500);

ctx.fillStyle = 'red';
ctx.fillRect(250, 300, 500, 100);

ctx.fillStyle = 'green';
ctx.fillRect(500, 200, 500, 200);

ctx.fillStyle = 'yellow';
ctx.fillRect(250, 100, 750, 100);

ctx.fillStyle = 'orange';
ctx.fillRect(250, 0, 250, 300);

ctx.fillStyle = 'black';
ctx.fillRect(250, 100, 750, 400);
*/

let ave = new Image();
let cerdito = new Image();

ave.src = 'img/ave-volando.png';
cerdito.src = 'img/cerdito.png';

ave.onload = function () {
	/* ave, posx, posy, ancho, alto */
	ctx.drawImage(ave, 100, 300, 133, 100);
};

cerdito.onload = function () {
	/* cerdito, posx, posy, ancho, alto */
	ctx.drawImage(cerdito, 800, 300, 103, 100);
};