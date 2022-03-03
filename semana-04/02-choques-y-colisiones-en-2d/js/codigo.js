/*
Dados los parametros de dos intervalos
Intervalo1: li1, ls1
Intervalo2: li2, ls2
Crear una funcion que reciba dichos valores
y retorne true si se intersecta
y false si no lo hacen
*/

function verificarInterseccion(li1, ls1, li2, ls2){
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

console.log(verificarInterseccion(-2,1,0,3));
console.log(verificarInterseccion(0,3,4,7));