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
Calcular el area de un triangulo dadas la base y la altura (base, altura)
y de un rectangulo de lados diferentes (base, altura)
02 funciones
*/