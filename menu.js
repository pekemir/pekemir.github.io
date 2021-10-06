
var contador=1

$(document).ready(main);

var contadorr=1;
function main(){
alert("holaasss") ;

		// $('nav').toggle(); toggle=aparece brusco
alert(contador);
console.log(contador);
console.log('.Navmenu'.left);
		if(contador == 1){
alert("666");
			$('.Navmenu').animate({
              
				right: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.Navmenu').animate({
                
				right: '-100%'
			});
		}

	

};
function ira(pagina){
	console.log(pagina);
	location.href=pagina
}
