/*
Clase: Pokemon
Atributos: Tipo, HP, Nombre

Objeto 1 de la clase Pokemon
- Tipo: Electrico
- HP: 100
- Nombre: Pikachu

Objeto 2 de la clase Pokemon
- Tipo: Agua
- HP: 150
- Nombre: Squirtle
*/

class Pokemon{ // Clase
	constructor(tipo, hp, nombre){
		this.tipo = tipo;
		this.hp = hp;
		this.nombre = nombre;
	}
	saludar(){
		return "Hola, me llamo "+this.nombre;
	}
	indicarTipo(){
		return "Soy de tipo "+this.tipo;
	}
}
let p1 = new Pokemon("Electrico", "100", "Pikachu"); // Instanciando el objeto p1 de la clase Pokemon
console.log(p1.saludar())
console.log(p1.indicarTipo());
let p2 = new Pokemon("Agua", "150", "Squirtle"); // Instanciando el objeto p2 de la clase Pokemon
console.log(p2.saludar());
console.log(p2.indicarTipo());

/*
Clase: Libro
Atributos: Titulo, Autor, Paginas

Objeto 1 de la clase Libro
- Titulo: Harry Potter y la Piedra Filosofal
- Autor: J. K. Rowling
- Paginas: 800

Objeto 2 de la clase Libro
- Titulo: Conversacion en la catedral
- Autor: Mario Vargas Llosa
- Paginas: 400
*/

class Libro{
	constructor(titulo, autor, paginas){
		this.titulo = titulo;
		this.autor = autor;
		this.paginas = paginas;
	}
	mostrarDatos(){
		return "Libro "+this.titulo+
			   " escrito por "+this.autor+
			   " con un total de "+this.paginas+" paginas";
	}
}
let l1 = new Libro("Harry Potter y la Piedra Filosofal", "J. K. Rowling", 800);
console.log(l1.mostrarDatos());

/*
Clase: Mascota
Atributos: Nombre, Tipo, Edad

Objeto 1 de la clase Mascota
- Nombre: Firulais
- Tipo: Perro
- Edad: 4

Objeto 2 de la clase Mascota
- Nombre: Micky
- Tipo: Ratón
- Edad: 5
*/

class Mascota{
	constructor(nombre, tipo, edad){
		this.nombre = nombre;
		this.tipo = tipo;
		this.edad = edad;
	}
	presentar(){
		return "Mi mascota se llama "+this.nombre+
			   " y es un "+this.tipo+
			   " de "+this.edad+" anhos";
	}
	aumentarEdad(){
		this.edad = this.edad+1;
	}
}
let m1 = new Mascota("Firulais", "Perro", 4);
console.log(m1.presentar());
m1.aumentarEdad();
console.log(m1.presentar());

/*
Clase: Cantante
Atributos:
- Genero
- Genero de musica
- Nombre

Objeto 1 de la clase Cantante
- Genero: mujer
- Genero de musica: Pop en ingles
- Nombre: Olivia Rodrigo

Objeto 2 de la clase Cantante
- Genero: mujer
- Genero de musica: Trap Argentino
- Nombre: Maria Becerra
*/


class Cantante{
	constructor(genero, generoMusical, nombre){
		this.genero = genero;
		this.generoMusical = generoMusical;
		this.nombre = nombre;
	}
	presentar(){
		if(this.genero == "mujer"){
			return "Hola, soy "+this.nombre+
			   ", una cantante de "+this.generoMusical;
		}else if(this.genero == "hombre"){
			return "Hola, soy "+this.nombre+
			   ", un cantante de "+this.generoMusical;
		}
	}
	cambiarGenero(nuevoGeneroMusical){
		this.generoMusical = nuevoGeneroMusical;
	}
}

let c1 = new Cantante("mujer", "Pop en ingles", "Olivia Rodrigo");
let c2 = new Cantante("hombre", "Vallenato", "Carlos Vives");

console.log(c1.presentar());
console.log(c2.presentar());

c2.cambiarGenero("Reggaeton");
console.log(c2.presentar());