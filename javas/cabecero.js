const navmenu= document.getElementById('controlnavmenu');
var contador=1;

	$(document).ready(main);

function main(){
    $('#cabecerobotonmenu').click(function(){
		// $('nav').toggle(); toggle=aparece brusco

		if(contador == 1){
			$('.navmenu').animate({
              
				right: '0vw'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.navmenu').animate({
                
				right: '-100vw'
			});
		}

	});

};
window.onorientationchange= function(){
	console.log("resizeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    if(screen.width>1023){ 
		console.log("if");
		navmenu.style.right='0vw'}

		else{
			navmenu.style.right='-100vw';
			contador=1}
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

function ponerimagen1(){
	const myH1=document.getElementById('imagencalendarios');
	var ruta="url(imagenes/calendario.jpg)";
	myH1.style.height="130vw";
    myH1.style.backgroundImage=ruta;
}
function ponerimagen2(){
	const myH1=document.getElementById('imagencalendarios');
	var ruta="url(imagenes/primera.png)";
	myH1.style.height="250vw";
    myH1.style.backgroundImage=ruta;
}
function ponerimagen3(){
	const myH1=document.getElementById('imagencalendarios');
	var ruta="url(imagenes/obras.png)";
	myH1.style.height="100vw";
    myH1.style.backgroundImage=ruta;
}