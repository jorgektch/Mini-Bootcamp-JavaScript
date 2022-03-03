/*
Dados los parametros de dos intervalos
Intervalo1: li1, ls1
Intervalo2: li2, ls2
Crear una funcion que reciba dichos valores
y retorne true si se intersecta
y false si no lo hacen
*/

function verificarInterseccion1D(li1, ls1, li2, ls2){
	let li_min, ls_max;

	/* El valor minimo entre li1 y li2
	li_min = Math.min(li1, li2); */
	if(li1<li2){
		li_min = li1;
	}else{
		li_min = li2;
	}

	/* El valor maximo entre ls1 y ls2
	ls_max = Math.max(ls1, ls2); */
	if(ls1>ls2){
		ls_max = ls1;
	}else{
		ls_max = ls2;
	}

	if(ls_max-li_min < (ls1-li1)+(ls2-li2)){
		return true;
	}else{
		return false;
	}
}

console.log(verificarInterseccion1D(-2,1,0,3));
console.log(verificarInterseccion1D(0,3,4,7));

/*
Se tienen las coordenadas y dimensiones de
02 rectangulos ubicados en un lienzo canvas
p: (xp,yp), (wp,hp)
e: (xe,ye), (we,he)
Se requiere implementar una funcion
que retorne true si los rectangulos se
interceptan o se tocan en alguno(s) de
sus bordes; en caso contrario se debe
retornar false
*/

function verificarInterseccion2D(xp,yp,wp,hp,xe,ye,we,he) {
	let xinf = Math.min(xp,xe);
	let yinf = Math.min(yp,ye);

	let xsup = Math.max(xp+wp,xe+we);
	let ysup = Math.max(yp+hp,ye+he);

	let areap = wp*hp;
	let areae = we*he;
	let areat = (xsup-xinf)*(ysup-yinf);

	let xc1;
	if(xinf == xp){
		xc1 = xp+wp;
	}else{
		xc1 = xe+we;
	}
	let areac1 = (xsup-xc1)*(ysup-yinf);

	let yc2;
	if(yinf == yp){
		yc2 = yp+hp;
	}else{
		yc2 = ye+he;
	}
	let areac2 = (xsup-xinf)*(ysup-yc2);

	if(areat<=areap+areae+areac1+areac2){
		return true;
	}else{
		return false;
	}
}

console.log(verificarInterseccion2D(10,10,20,30,40,40,20,30));
console.log(verificarInterseccion2D(10,10,20,30,30,40,20,30));