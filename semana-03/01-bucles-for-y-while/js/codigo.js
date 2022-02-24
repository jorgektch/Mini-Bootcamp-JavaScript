/*
var
- Global
- Permite redeclaracion
- Permite reasignacion de valor
let
- Depende del scope (ambito donde vive una variable)
- Permite reasignacion de valor
const
- No permite reasignacion de valor
*/

/*
let x = 5;
let texto = "Hola mundo";
console.log(x);
*/

/* Antecedente para trabajar con bucles */
/*
let numero = 1;
console.log(numero);
numero = 2;
console.log(numero);
numero = 3;
console.log(numero);
numero = 4;
console.log(numero);
numero = 5;
console.log(numero);
numero = 6;
console.log(numero);
numero = 7;
console.log(numero);
numero = 8;
console.log(numero);
*/

/* Bucle for */
/* i++ -> i=i+1 */
/*
let tope = 10;
for(let i=1; i<=tope; i++){
	console.log(i);
}
*/

/* Reto 01: Imprimir los numeros pares entre 1 y 15 */
let tope = 15;
for(let i=1; i<=tope; i++){
	if(i%2 == 0){ /* m%n -> el resto de dividir m entre n */
		console.log(i);
	}
}