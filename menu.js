$(document).ready(main);
var contador=1;
var contadorr=1;
function main(){
alert("holaasggjjjkkkkjjgs") ;
   contador = contadorr
		// $('nav').toggle(); toggle=aparece brusco
alert(contador);
console.log(contador);
console.log('.Navmenu'.left);
		if(contador == 1){
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
