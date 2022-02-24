/* alert("Hola mundo") */

/* Variables numericas */
var numA = 2;
var numB = 3;
var numS = numA+numB;
var numR = numA-numB;
var numP = numA*numB;
var numD = numA/numB;
/* alert(numS) */
/* alert(numR) */
/* alert(numP) */
/* alert(numD) */

/* Variables de texto */
var saludo = "Buenos dias";
var nombre = "Juan";
var mensaje = saludo+" "+nombre;
/* alert(mensaje) */

/* Variables booleanas */
var afirmacion1 = true;
var afirmacion2 = false;

/* Variables compuestas: array
- Los elementos ocupan posiciones:
  0,1,2,...
- Se accede a los valores por pos:
  alert(arreglo[pos])
- Se agregan los elementos:
  arreglo.push("JavaScript")
- La longitud de calcula:
  arreglo.length
- Se elimina por pos:
  delete arreglo[pos]
*/

var arreglo = ["Jorge", 3.14, true]
arreglo.push("JavaScript")
delete arreglo[2]
/* alert(arreglo) */

/* Condicionales */
/*
var edad = 19;
if(edad>=18){
	alert("Si eres mayor de edad");
}else{
	alert("No eres mayor de edad");
}
*/
/*
a%b devuelve el resto/residuo
de dividir a entre b
Ejemplo:
13%5 -> 3 (0,1,2,3*,4)
22%6 -> 4 (0,1,2,3,4*,5)
7%2 -> 1 (0,1*)
4%2 -> 0 (0*,1)
*/

/*
var num = 7;
if(num%2 == 0){
	alert("Es numero par");
}else{
	alert("Es numero impar");
}
*/

/*
var ia = [4,9];
var ib = [8,15];
var ic = [Math.min(ia[0],ib[0]),Math.max(ia[1],ib[1])];
var la = ia[1]-ia[0];
var lb = ib[1]-ib[0];
var lc = ic[1]-ic[0];
if(la+lb>lc){
	alert("Si hay interseccion");
}else{
	alert("No hay interseccion");
}
*/

/*
Reto
Se desea saber si una persona ingresa a
ver una pelicula de clasificacion R
(apta para mayores de 14)
considerando que debe tener ademas un monto
suficiente para comprar su entrada
*/

var edad = 11;
var dinero = 100;

var edadMin = 14;
var precioEntrada = 20;

if(edad>=edadMin){
	if(dinero>=precioEntrada){
		alert("Si puede ingresar");
	}else{
		alert("No puede ingresar. No puede pagar la entrasa");
	}
}else{
	alert("No puede ingresar. No tiene la edad minima");
}

if(dinero>=precioEntrada){
	if(edad>=edadMin){
		alert("Si puede ingresar");
	}else{
		alert("No puede ingresar. No tiene la edad minima");
	}
}else{
	alert("No puede ingresar. No puede pagar la entrada");
}