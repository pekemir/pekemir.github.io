$(document).ready(main);
var contador=1;
function main(){
alert("holaass") ;
    $('.BarraMbotonmenu').click(function(){
alert("hotttla") ;
		// $('nav').toggle(); toggle=aparece brusco
alert("click");
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

	});

};
function ira(pagina){
	console.log(pagina);
	location.href=pagina
}
