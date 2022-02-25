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

let ave1 = new Image();
ave1.src = 'img/ave-volando.png';
ave1.onload = function () {
	ctx.drawImage(ave1, 0, 0, 133, 100);
};

let ave2 = new Image();
ave2.src = 'img/ave-volando.png';
ave2.onload = function () {
	ctx.drawImage(ave2, 100, 100, 133, 100);
};

let ave3 = new Image();
ave3.src = 'img/ave-volando.png';
ave3.onload = function () {
	ctx.drawImage(ave3, 200, 200, 133, 100);
};

let ave4 = new Image();
ave4.src = 'img/ave-volando.png';
ave4.onload = function () {
	ctx.drawImage(ave4, 300, 300, 133, 100);
};

let ave5 = new Image();
ave5.src = 'img/ave-volando.png';
ave5.onload = function () {
	ctx.drawImage(ave5, 400, 400, 133, 100);
};
