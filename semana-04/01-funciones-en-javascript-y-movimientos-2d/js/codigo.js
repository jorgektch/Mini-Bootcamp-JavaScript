/* const permite declarar una variable que no se puede mofidicar */
/* Guardo el canvas en la variable c */
const c = document.querySelector("#lienzo");
const ctx = c.getContext("2d");

// Contexto previo a funciones en JavaScript
let ladoCuadrado1 = 4;
let areaCuadrado1 = ladoCuadrado1*ladoCuadrado1;
console.log(areaCuadrado1);

let ladoCuadrado2 = 7;
let areaCuadrado2 = ladoCuadrado2*ladoCuadrado2;
console.log(areaCuadrado2);

let ladoCuadrado3 = 3;
let areaCuadrado3 = ladoCuadrado3*ladoCuadrado3;
console.log(areaCuadrado3);

// Funciones en JavaScript
function areaCuadrado(lado){
	let area = lado*lado;
	return area;
}

console.log(areaCuadrado(4));
console.log(areaCuadrado(7));
console.log(areaCuadrado(3));

/*
Reto 01:
Calcular el area de un triangulo dadas la base y la altura (base, altura)
y de un rectangulo de lados diferentes (base, altura)
02 funciones
*/
function areaTriangulo(base, altura){
	let area = base*altura/2;
	return area;
}
function areaRectangulo(base, altura){
	let area = base*altura;
	return area;
}
console.log(areaTriangulo(3,4));
console.log(areaRectangulo(3,4));

/*
Reto 02:
Dados w,h que son dimensiones de una lienzo
canvas y x,y son posiciones
y de un punto en 2d
Crear una funcion que reciba todos esos datos
y retorne true, si el punto esta dentro del
lienzo y false si no lo esta
*/
function puntoInterior(x,y,w,h){
	let estaDentro; /* Para almacenar el valor de verdad */
	if(0<=x && x<w && 0<=y && y<h){
		estaDentro = true;
	}else{
		estaDentro = false;
	}
	return estaDentro;
}
console.log(puntoInterior(1000,1000,1000,500));
/*
Reto 03:
Dados w,h que son dimensiones de una lienzo
canvas y x,y y wp,hp que son posiciones
y dimensiones de un personaje en 2d
Crear una funcion que reciba todos esos datos
y retorne true, si la figura esta dentro del
lienzo y false si no lo esta
*/
function figuraInterior(x,y,wp,hp,w,h){
	let x2 = x+wp;
	let y2 = y;

	let x3 = x+wp;
	let y3 = y+hp;

	let x4 = x;
	let y4 = y+hp;

	let estaDentro; /* Para almacenar el valor de verdad */
	if(puntoInterior(x,y,w,h) &&
	   puntoInterior(x2,y2,w,h) &&
	   puntoInterior(x3,y3,w,h) &&
	   puntoInterior(x4,y4,w,h)){
		estaDentro = true;
	}else{
		estaDentro = false;
	}
	return estaDentro;
}

console.log(figuraInterior(500,250,1000,500,1000,500));
