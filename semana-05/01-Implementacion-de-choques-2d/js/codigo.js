/* const permite declarar una variable que no se puede mofidicar */
/* Guardo el canvas en la variable c */
const c = document.querySelector("#lienzo");
const ctx = c.getContext("2d");

function verificarPuntoEnIntervalo(li, ls, x){
	/* Se verifica si un punto x esta en un intervalo de li a ls */
	if(li<=x && x<=ls){
		return true;
	}else{
		return false;
	}
}

function verificarInserseccionIntervalos(li1, ls1, li2, ls2){
	/* Se verifica dos intervalos de li1 a ls1 y li2 a ls2 se intersectan */
	if(verificarPuntoEnIntervalo(li1, ls1, li2) ||
	   verificarPuntoEnIntervalo(li1, ls1, ls2)){
		return true;
	}else{
		return false;
	}
}

function verificarPuntoEnRectangulo(xp,yp,w,h,x,y){
	/* Se verifica que un punto x, y este dentro o no de un rectangulo
	de vertice xp,yp y dimensiones w y h */
	if(verificarPuntoEnIntervalo(xp,xp+w,x) &&
	   verificarPuntoEnIntervalo(yp,yp+h,y)){
		return true;
	}else{
		return false;
	}
}

function verificarInterseccionRectangulos(xp,yp,wp,hp,xe,ye,we,he){
	if(verificarInserseccionIntervalos(xp,xp+wp,xe,xe+we) &&
	   verificarInserseccionIntervalos(yp,yp+hp,ye,ye+he)){
		return true;
	}else{
		return false;
	}
}

function verificarRectanguloDentroDeOtro(xc,yc,wc,hc,xp,yp,wp,hp){
	if(verificarPuntoEnRectangulo(xc,yc,wc,hc,xp,yp) &&
	   verificarPuntoEnRectangulo(xc,yc,wc,hc,xp+wp,yp) &&
	   verificarPuntoEnRectangulo(xc,yc,wc,hc,xp,yp+hp) &&
	   verificarPuntoEnRectangulo(xc,yc,wc,hc,xp+wp,yp+hp)){
		return true;
	}else{
		return false;
	}
}

// Estilos
ctx.font = "bold 20px Verdana";
ctx.fillStyle = "#003050"

// Imagenes
let fondo = new Image();
let personaje = new Image();
let corazon1 = new Image();
let corazon2 = new Image();
let corazon3 = new Image();
let reloj = new Image();

fondo.src = "img/fondo.png";
personaje.src = "img/personaje.png";
corazon1.src = 'img/corazon.png';
corazon2.src = 'img/corazon.png';
corazon3.src = 'img/corazon.png';
reloj.src = 'img/reloj.png';

// Audio
let sonido_fondo = new Audio();
let sonido_movimiento = new Audio();

sonido_fondo.src = 'media/soundtrack.mp3';
sonido_movimiento.src = 'media/movimiento.mp3';

// Variables del juego
let vidas = 5;
let tiempo = 25;
let puntos = 0;

// Variables de posicion
let fondo_x = 0;
let fondo_y = 0;
let principal_x = 100;
let principal_y = 332;

let otros_cant = 5;
let otros_img = [];
let otros_x = [] // Posicion en x
let otros_y = 332;
let otros_bueno = []; // Si es bueno va true, en caso contrario va false
let otros_vivo = []; // Si esta vivo va true, en caso contrario va false

// Variables de dimension
let fondo_w = 1000;
let fondo_h = 500;
let personaje_w = 100;
let personaje_h = 100;
let otro_w = 100;
let otro_h = 100;

// Variables de movimiento
let principal_veloc_x = 0;
let principal_veloc_y = 0;
let aceleracion_gravedad = 0.5;
let salto_iniciado = false;
// Listener de eventos que espera una accion para lanzar una funcion
document.addEventListener("keydown", capturarMovimiento);

function capturarMovimiento(){
	// keyCode = {37 left, 38 up, 39 rigth, 40 down}
	if(event.keyCode == 37){
		principal_veloc_x = -10; // Si se presiona el boton izq: la velocidad en x se vuelve negativa
		sonido_movimiento.pause();
		sonido_movimiento.currentTime = 0;
		sonido_movimiento.play();
	}
	if(event.keyCode == 38){
		principal_veloc_y = 10; // Si se presiona el boton arriba: la velocidad en y se vuelve negativa (para que suba)
		salto_iniciado = true; // Se indica que hay un salto que se ha iniciado
		sonido_movimiento.pause();
		sonido_movimiento.currentTime = 0;
		sonido_movimiento.play();
	}
	if(event.keyCode == 39){
		principal_veloc_x = 10; // Si se presiona el boton der: la velocidad en x se vuelve positiva
		sonido_movimiento.pause();
		sonido_movimiento.currentTime = 0;
		sonido_movimiento.play();
	}
}

function inicializarOtros(){
	let x_min = 250, x_max = 1000;
	for(let i=0; i<otros_cant; i++){
		let otro = new Image()
		let max = 1, min = 0;
		let aleatorio = Math.floor(Math.random()*(max-min+1)+min);
		if(aleatorio == 0){
			otro.src = 'img/palabras/casa.png';
			otros_bueno.push(true);
		}else if(aleatorio == 1){
			otro.src = 'img/palabras/perro.png';
			otros_bueno.push(false);
		}
		otros_img.push(otro);
		otros_x.push(250+i*(x_max-x_min)/otros_cant);
		otros_vivo.push(true);
	}
}

function dibujarPersonajes(){
	// Personaje principal
	ctx.drawImage(personaje, principal_x, principal_y, personaje_w, personaje_h);
	// Personajes otros
	for(let i=0; i<otros_cant; i++){
		//console.log(i);
		if(otros_vivo[i] == true){
			ctx.drawImage(otros_img[i], otros_x[i], otros_y, otro_w, otro_h);
		}
	}
}

function moverPersonajeY(){
	if(principal_y - principal_veloc_y*1 < 332){ // Si valor de y esta por encima del valor base: 332
		principal_y = principal_y - principal_veloc_y*1; // Se actualiza la posicion en Y
		if(salto_iniciado == true){
			principal_veloc_y = principal_veloc_y-aceleracion_gravedad*1; // Se actualiza la velocidad (cambia)
		}
	}else{
		principal_y = 332;
	}
}

function moverPersonajeX(){
	if(verificarRectanguloDentroDeOtro(fondo_x, fondo_y, fondo_w, fondo_h,
		                               principal_x+principal_veloc_x*1, principal_y, personaje_w, personaje_h) == true){
		principal_x = principal_x+principal_veloc_x*1;
	}else{
		// Cambio de direccion
		principal_veloc_x = -principal_veloc_x;
	}
}

function verificarColision(){
	for(let i=0; i<otros_cant; i++){ // Se recorren todos los "otros" personajes
		if(otros_vivo[i] == true){ // Solo se van a verificar choques con personajes vivos
			if(verificarInterseccionRectangulos(principal_x, principal_y, personaje_w, personaje_h,
												otros_x[i], otros_y, otro_w, otro_h) == true){
				principal_veloc_x = -principal_veloc_x;
				vidas = vidas-1;
				otros_vivo[i] = false;
			}
		}
	}
}

function dibujarDatos(){
	// Fondo
	ctx.drawImage(fondo, fondo_x, fondo_y, fondo_w, fondo_h);
	// Vidas
	for(let i=0;i<vidas;i++){
		ctx.drawImage(corazon1, 35+40*i, 33, 30, 27);
	}
	// Tiempo
	ctx.drawImage(reloj, 420, 27, 30, 30);
	ctx.fillText("25s", 460, 50);
	// Puntos
	ctx.fillText("Puntos: 100pts", 800, 50);
}

function dibujar(){
	moverPersonajeX(); // Movimiento en X
	moverPersonajeY(); // Movimiento en Y

	verificarColision(); // Verificar colision

	dibujarDatos(); // Datos del juego
	dibujarPersonajes(); // Personajes
	
	requestAnimationFrame(dibujar);
}

inicializarOtros();
//sonido_fondo.play(); // En revision
dibujar(); // Invocando a la funcion dibujar()

