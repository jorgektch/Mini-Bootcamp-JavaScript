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
/* m%n -> el resto de dividir m entre n */
/*
let tope = 15;
for(let i=1; i<=tope; i++){
	if(i%2 == 0){ 
		console.log(i);
	}
}
*/

/* Reto 02: Imprimir las edades de personas que tienen menos de 18 anhos */
/* Los elementos del arreglo tienen posiciones desde 0 al 5 */
/*
let edades = [17,21,14,30,12,29];
let longitud = edades.length;
for(let pos = 0; pos<longitud; pos++){
	if(edades[pos]<18){
		console.log(edades[pos]);
	}
}
*/

/* Reto 03: Enviar saludos a las personas que cumplen anhos en el mes */
/* = -> Asignacion */
/* == -> Comparacion de igualdad */
/*
let cumples = [["Jose", [18,2]],
               ["Ana", [15,3]],
               ["Luis", [7,2]],
               ["Liz", [3,12]]];

for(let pos=0; pos<cumples.length; pos++){
	if(cumples[pos][1][1] == 2){
		console.log("Hola "+cumples[pos][0]);
	}
}
*/

/* Bucle while */
/*
let numero = 1;
let tope = 10;
while(numero<=tope){
	console.log(numero);
	numero++;
}
*/

/*
Reto 04: Dados los puntajes de jugadores, recorrer los datos y mostrar
los username hasta encontrar un ganador, el ganador debe tener 100 puntos
*/
/* let encontrado = false; variables flag */
/*
let jugadas = [["vegeta777", 12],
			  ["alex123", 11],
			  ["pepelucho1", 50],
			  ["anamaria2", 100],
			  ["rodolfoelreno", 1]];

let pos = 0;
let encontrado = false; 
while(encontrado == false && pos<jugadas.length){
	console.log(jugadas[pos][0]);
	if(jugadas[pos][1]==100){
		encontrado = true;
	}
	pos++;
}
*/

/*
Reto 05:
Se tienen un conjunto de posiciones de un punto en el plano
recorrer dichas posiciones hasta antes que se salga de los limites
de la pantalla de 100x100 pixeles (se consideran posiciones desde el 0)
*/
let posiciones = [[1,0],
				 [0,5],
				 [99,50],
				 [52,4],
				 [109,3],
				 [12,15]];
let limitex = 99;
let limitey = 99;

let salio = false;
let pos = 0;
while(salio == false && pos<posiciones.length){
	if(posiciones[pos][0]>limitex || posiciones[pos][1]>limitey || posiciones[pos][0]<0 || posiciones[pos][1]<0){
		salio = true;
	}
	if(salio == false){
		console.log(posiciones[pos]);
	}
	pos++;
}

let dentro = true;
let posi = 0;
while(dentro == true && posi<posiciones.length){
	if(0<=posiciones[posi][0] && posiciones[posi][0]<=99 && 0<=posiciones[posi][1] && posiciones[posi][1]<=99){
		console.log(posiciones[posi]);
	}else{
		dentro = false;
	}
	posi++;
}