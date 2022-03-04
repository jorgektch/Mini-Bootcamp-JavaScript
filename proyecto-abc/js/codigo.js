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

function verificarInterseccionRectangulos(xp,yp,wp,hp,xe,ye,we,he){
	if(verificarInserseccionIntervalos(xp,xp+wp,xe,xe+we) &&
	   verificarInserseccionIntervalos(yp,yp+hp,ye,ye+he)){
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
let enemigo = new Image();
let corazon1 = new Image();
let corazon2 = new Image();
let corazon3 = new Image();
let reloj = new Image();

fondo.src = "img/fondo.png";
personaje.src = "img/personaje.png";
enemigo.src = "img/casa.png";
corazon1.src = 'img/corazon.png';
corazon2.src = 'img/corazon.png';
corazon3.src = 'img/corazon.png';
reloj.src = 'img/reloj.png';

// Variables de posicion
let fondo_x = 0;
let fondo_y = 0;
let personaje_x = 100;
let personaje_y = 332;
let enemigo_x = 500;
let enemigo_y = 332;

// Variables de dimension
let fondo_w = 1000;
let fondo_h = 500;
let personaje_w = 100;
let personaje_h = 100;
let enemigo_w = 100;
let enemigo_h = 100;

// Variables de movimiento
let desplazamiento = 10;
let personaje_dist_x = 2; /* Avanza una distancia determinada */
let personaje_sent_x = 1; /* Avanza en un sentido determinado */


// Listener de eventos que espera una accion para lanzar una funcion
document.addEventListener("keydown", moverPersonaje);

function moverPersonaje(){
	// keyCode = {37 left, 38 up, 39 rigth, 40 down}
	if(event.keyCode == 37){
		personaje_x = personaje_x - desplazamiento;
	}
	if(event.keyCode == 38){
		personaje_y = personaje_y - desplazamiento;
	}
	if(event.keyCode == 39){
		personaje_x = personaje_x + desplazamiento;
	}
	if(event.keyCode == 40){
		personaje_y = personaje_y + desplazamiento;
	}
}

function dibujar(){
	// Fondo del juego
	ctx.drawImage(fondo, fondo_x, fondo_y, fondo_w, fondo_h);
	
	// Datos del juego
	ctx.drawImage(corazon1, 35, 33, 30, 27);
	ctx.drawImage(corazon2, 70, 33, 30, 27);
	ctx.drawImage(corazon3, 105, 33, 30, 27);
	ctx.drawImage(reloj, 420, 27, 30, 30);
	ctx.fillText("25s", 460, 50);
	ctx.fillText("Puntos: 100pts", 800, 50);

	// Elementos del juego
	ctx.drawImage(personaje, personaje_x, personaje_y, personaje_w, personaje_h);
	ctx.drawImage(enemigo, enemigo_x, enemigo_y, enemigo_w, enemigo_h);
	requestAnimationFrame(dibujar);
}

dibujar(); // Invocando a la funcion dibujar()

