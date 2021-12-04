const navmenu= document.getElementById('controlnavmenu');
const navmenu5= document.getElementsByClassName('controlnavmenuu');

var a52=document.getElementById("cabeceroboton52");
var a=document.getElementById("controlnavmenu");
var a51=document.getElementById("cabeceroboton51");
var contadornavmenu=1;
var contadornavmenu5=1;
var contadornavmenu51=1;
var contadornavmenu52=1;
var fuera='-100vw';
var dentro='0vw';
var color='brown';

	$(document).ready(main);
function escondernavmenu() {
	$('.navmenu').animate({
                
		right: fuera
	});
	contadornavmenu = 1;
}
function expandirnavmenu() {
	$('.navmenu').animate({
              
		right: dentro
	});
	contadornavmenu = 0;
a.style.display
}
function escondernavmenu5() {
	$('.navmenu5').animate({
                
		right: fuera
	});
	contadornavmenu5 = 1;
}
function expandirnavmenu5() {
	$('.navmenu5').animate({
              
		right: dentro
	});
	contadornavmenu5 = 0;
}
function escondernavmenu51() {
	$('.navmenu51').animate({
                
		right: fuera
	});
	contadornavmenu51 = 1;
	a51.style.backgroundColor="transparent";
}
function expandirnavmenu51() {
	a51.style.backgroundColor=color;
	$('.navmenu51').animate({
              
		right: dentro
	});
	contadornavmenu51 = 0;

}
function escondernavmenu52() {
	$('.navmenu52').animate({
                
		right: fuera
	});
	contadornavmenu52 = 1;
	
      a52.style.backgroundColor="transparent";
}
function expandirnavmenu52() {
	
	
      a52.style.backgroundColor=color;
	$('.navmenu52').animate({
              
		right: dentro
	});
	contadornavmenu52 = 0;
}
function main(){
	if (window.screen.width>1023) {dentro='-0vw'
		
	}else{dentro='0vw'}
    $('#cabecerobotonmenu').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contadornavmenu == 1){
			expandirnavmenu();
		} else {
			escondernavmenu();
			escondernavmenu5();
			escondernavmenu51();
			escondernavmenu52();
		}

	});
	$('#cabecerobotoncompeticiones').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contadornavmenu5 == 1){
			expandirnavmenu5();
		} else {
			escondernavmenu51();
			escondernavmenu5();
			escondernavmenu52();
		}

	});
	$('#cabeceroboton51').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contadornavmenu51 == 1){
			expandirnavmenu51();
			escondernavmenu52();
		} else {
			escondernavmenu51();
		}
});
$('#cabeceroboton52').click(function(){
	// $('nav').toggle(); toggle=aparece brusco

	if(contadornavmenu52 == 1){
		expandirnavmenu52();
		escondernavmenu51();
	} else {
		escondernavmenu52();
	}
});
$('#volver1').click(function(){
	// $('nav').toggle(); toggle=aparece brusco

	
		escondernavmenu52();
		escondernavmenu51();
		escondernavmenu5()
	
});
	
};
function subcompeticiones(){

}
window.onorientationchange= function(){
	console.log("resizeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    if(screen.width>1023& screen.width<screen.height) { 
		console.log("if");
		navmenu.style.right='-100vw'
		dentro='0vw'
		}
		else if(screen.width>1023){ 
			console.log("if");
			navmenu.style.right='0vw'
			dentro='0vw'
			}

		else{
			navmenu.style.right='-100vw';
			dentro='0vw'
			contadornavmenu=1}
                        }
						


function ira(pagina){
	console.log(pagina);
	location.href=pagina
}
/*aparecerobjetos*/
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
	elementTop <=
	(window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
	elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
	if (elementInView(el, 1.15)) {
	  displayScrollElement(el);
	} else if (elementOutofView(el)) {
	  hideScrollElement(el)
	}
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});



function ponerimagen3(){
	const myH1=document.getElementById('imagencalendarios');
	var ruta="url(imagenes/obras.png)";
	myH1.style.height="100vw";
    myH1.style.backgroundImage=ruta;
}
function abrircompeticiones(posicion){
	location.href='competiciones.html?var1='+posicion;}

	function abrirequipo(posicion){
		var numeroequipo=posicion;
		location.href='equipo.html?var1='+numeroequipo;
	  
	  }
	


//POLÍTICA DE COOKIES
//Evento clic de la etiqueta con la clase (.js-boton-cookie)
$('.js-boton-cookie').click(function() {
	//Almaceno los datos en localStorage (clave, valor)
	localStorage.setItem('salduie78', 'yes');
	//Oculto la barra que muestra la información de política de cookies
	$('.politicas-cookie').css('display', 'none');
	//Muestro un mensaje en consola
	console.log('Haz aceptado nuestra política de cookies. ☺️');
   });
   
   //Creo la variable "dev" que almacena el valor asignado que seria (yes)
   var dev = localStorage.getItem('salduie78');
   //Realizo una condición si el valor obtenido de la variable "dev" es diferente (null) quiere decir que el usuario a aceptado nuestra política de cookies
   if(dev != null){
	$('.politicas-cookie').css('display', 'none');
   }else{//De lo contrario muestro la información
	//$('.politicas-cookie').css('display', 'block');
$('.politicas-cookie').css('display', 'none');//quitar esto para que se vea
   }
  
  