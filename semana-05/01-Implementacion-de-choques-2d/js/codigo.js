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

// Variables del juego
let vidas = 5;
let tiempo = 25;
let puntos = 0;

// Variables de posicion
let fondo_x = 0;
let fondo_y = 0;
let personaje_x = 100;
let personaje_y = 332;

let enemigos_cant = 5;
let enemigos_img = [];
let enemigos_x = [] // Posicion en x
let enemigos_y = 332;

// Variables de dimension
let fondo_w = 1000;
let fondo_h = 500;
let personaje_w = 100;
let personaje_h = 100;
let enemigo_w = 100;
let enemigo_h = 100;

// Variables de movimiento
let personaje_veloc_x = 0;
let personaje_veloc_y = 0;
let aceleracion_gravedad = 0.5;
let salto_iniciado = false;
// Listener de eventos que espera una accion para lanzar una funcion
document.addEventListener("keydown", capturarMovimiento);

function capturarMovimiento(){
	// keyCode = {37 left, 38 up, 39 rigth, 40 down}
	if(event.keyCode == 37){
		personaje_veloc_x = -10; // Si se presiona el boton izq: la velocidad en x se vuelve negativa
	}
	if(event.keyCode == 38){
		personaje_veloc_y = 10; // Si se presiona el boton arriba: la velocidad en y se vuelve negativa (para que suba)
		salto_iniciado = true; // Se indica que hay un salto que se ha iniciado
	}
	if(event.keyCode == 39){
		personaje_veloc_x = 10; // Si se presiona el boton der: la velocidad en x se vuelve positiva
	}
}

function inicializarEnemigos(){
	let x_min = 250, x_max = 1000;
	for(let i=0; i<enemigos_cant; i++){
		let enemigo = new Image()
		let max = 1, min = 0;
		let aleatorio = Math.floor(Math.random()*(max-min+1)+min);
		if(aleatorio == 0){
			enemigo.src = 'img/palabras/casa.png';
		}else if(aleatorio == 1){
			enemigo.src = 'img/palabras/perro.png';
		}
		enemigos_img.push(enemigo);
		enemigos_x.push(250+i*(x_max-x_min)/enemigos_cant);
		
	}
}

function dibujarEnemigos(){
	for(let i=0; i<enemigos_cant; i++){
		//console.log(i);
		ctx.drawImage(enemigos_img[i], enemigos_x[i], enemigos_y, enemigo_w, enemigo_h);
	}
}

function moverPersonajeY(){
	if(personaje_y - personaje_veloc_y*1 < 332){ // Si valor de y esta por encima del valor base: 332
		personaje_y = personaje_y - personaje_veloc_y*1; // Se actualiza la posicion en Y
		if(salto_iniciado == true){
			personaje_veloc_y = personaje_veloc_y-aceleracion_gravedad*1; // Se actualiza la velocidad (cambia)
		}
	}else{
		personaje_y = 332;
	}
}

function moverPersonajeX(){
	if(verificarRectanguloDentroDeOtro(fondo_x, fondo_y, fondo_w, fondo_h,
		                               personaje_x+personaje_veloc_x*1, personaje_y, personaje_w, personaje_h) == true){
		personaje_x = personaje_x+personaje_veloc_x*1;
	}else{
		// Cambio de direccion
		personaje_veloc_x = -personaje_veloc_x;
	}
}

function verificarColision(){
	/*
	if(verificarInterseccionRectangulos(personaje_x, personaje_y, personaje_w, personaje_h,
										enemigo_x, enemigo_y, enemigo_w, enemigo_h) == true){
		personaje_veloc_x = -personaje_veloc_x;
		vidas = vidas-1;
		console.log("Hubo una colision");
	}
	*/
}

function dibujar(){
	// Fondo del juego
	ctx.drawImage(fondo, fondo_x, fondo_y, fondo_w, fondo_h);
	dibujarEnemigos();
	
	moverPersonajeX(); // Movimiento en X
	moverPersonajeY(); // Movimiento en Y

	//verificarColision(); // Verificar colision

	// Datos del juego
	for(let i=0;i<vidas;i++){
		ctx.drawImage(corazon1, 35+40*i, 33, 30, 27);
	}
	/*
	ctx.drawImage(corazon1, 35, 33, 30, 27);
	ctx.drawImage(corazon2, 70, 33, 30, 27);
	ctx.drawImage(corazon3, 105, 33, 30, 27);
	*/
	ctx.drawImage(reloj, 420, 27, 30, 30);
	ctx.fillText("25s", 460, 50);
	ctx.fillText("Puntos: 100pts", 800, 50);

	// Elementos del juego
	ctx.drawImage(personaje, personaje_x, personaje_y, personaje_w, personaje_h);
	
	requestAnimationFrame(dibujar);
}

inicializarEnemigos();
dibujar(); // Invocando a la funcion dibujar()

