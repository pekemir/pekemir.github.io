var tope = 0;
const redes = document.getElementById('footer-redes')
const idheader = document.getElementById('header-idheader');
const fondomenu = document.getElementById('header-fondomenu');
const listamenu = document.getElementById('header-listamenu');
const iconosredes = document.getElementById('footer-iconosredes');
const insta = document.getElementById('index-insta');
const portada=document.getElementById('portada')
var ancho=1020;
var primera=1;
function cerrar(id) {
  id.style.display='none'
  
}
function revealheader() {
  

  redes.classList.remove('mostrarredes');
  iconosredes.classList.remove('circulo2mas')
  
  var reveals = document.querySelectorAll(".scrollheader");
  let windy = window.scrollY;
  let top2 = window.innerHeight;
 /* console.log(top2);*/
  tope = top2/2;
  if(window.innerWidth < ancho){
  for (var i = 0; i < reveals.length; i++) {
    if (windy > tope) {
     /* console.log(window.scrollY);
      console.log("scrolled");*/
      reveals[i].classList.add("scrolled");
      reveals[i].classList.add("desdeinicio");

    } else {
      console.log("no");
      reveals[i].classList.remove("scrolled");
      iconosredes.classList.remove('circulo2masmas')
    }}
  }
 
}
window.addEventListener("scroll", revealheader);

$('#header-botonexpandirmenu').click(function () {
  clickexpanmenu();
})

function clickexpanmenu() {
  redes.classList.remove('mostrarredes');
iconosredes.classList.remove('circulo2mas')
 // Al hacer click...
console.log(window.scrollY + "tope" + tope);
$('#header-botonexpandirmenu').toggleClass('visible_menu');/*botonhamburgesa*/
if (window.scrollY <= tope) {
  idheader.classList.add('desdeinicio');
  fondomenu.classList.add('despuesiniciofondomenu');
  listamenu.classList.add('despuesiniciofondomenu');
  $('#header-idheader').toggleClass('scrolled');
  togledesplegar()
}
else {
  idheader.classList.add('desdeinicio');
  fondomenu.classList.add('despuesiniciofondomenu');
  listamenu.classList.add('despuesiniciofondomenu');
  togledesplegar()
}
  
}

$('#header-fondomenu').click(function () {
  redes.classList.remove('mostrarredes');
  $('#header-botonexpandirmenu').toggleClass('visible_menu');/*botonhamburgesa*/
  if (window.scrollY <= tope) {
    idheader.classList.add('desdeinicio');
    fondomenu.classList.add('despuesiniciofondomenu');
    listamenu.classList.add('despuesiniciofondomenu');
    $('#header-idheader').toggleClass('scrolled');
    togledesplegar()
  }
  else {
    idheader.classList.add('desdeinicio');
    fondomenu.classList.add('despuesiniciofondomenu');
    listamenu.classList.add('despuesiniciofondomenu');
    togledesplegar()
  }
}
)

$('#footer-iconosredes').click(function () {
  toglerecoger();
  $('#footer-iconosredes').toggleClass('circulo2mas')
  iconosredes.classList.add('circulo2masmas')
  $('#footer-redes').toggleClass('mostrarredes');

})
function togledesplegar() {
  $('#header-fondomenu').toggleClass('desplegar');
  $('#header-listamenu').toggleClass('desplegar');
  quitarshow();
}
function toglerecoger() {
  fondomenu.classList.remove('desplegar');
  listamenu.classList.remove('desplegar');
  quitarshow();
}


/*enseñar menus*/
function showmenu(id) {
quitarshow2();
  quitarshow(id);
  $(id).toggleClass('show');
  $(id).removeClass('show2')

}
function obtenervariable() {
  const element=document.getElementById('listamenu2');
  console.log(getComputedStyle(element).getPropertyValue("--dist"));
 element.style.setProperty("--dist",'300px');
  console.log(getComputedStyle(element).getPropertyValue("--dist"));
}
  
function showmenu2(id,idpadre) {
  console.log( document.documentElement.style.getPropertyValue('--dist'));
  quitarshow2(id);
  $(id).toggleClass('show2');
  let idpa=document.getElementById(idpadre);
  if (idpa.classList.contains ('show2')) {console.log("si lo tiene");
  }
  else{idpa.classList.add('show2')};
    
  
  $(idpadre).toggleClass('show2');
  
}

function quitarshow2(id) //recoger acordeones
{
  var recogeracordeon = document.querySelectorAll(".elementomenuacordeon2");
  for (var i = 0; i < recogeracordeon.length; i++) {
    let id1 = "#" + recogeracordeon[i].getAttribute('id');
    if (id == id1) {
    } else { recogeracordeon[i].classList.remove("show2");
   }
  }
}
function quitarshow(id) //recoger acordeones
{
  var recogeracordeon = document.querySelectorAll(".elementomenuacordeon");
  for (var i = 0; i < recogeracordeon.length; i++) {
    let id1 = "#" + recogeracordeon[i].getAttribute('id');
    if (id == id1) {
    } else { recogeracordeon[i].classList.remove("show");
   }
  }
}

function ira(id) { //IR A SITIO DE LA MISMA PAGINA id con #

  toglerecoger();
  $('#header-botonexpandirmenu').removeClass('visible_menu');
  $('html, body').animate({
    scrollTop: $(id).offset().top - 120
  }, 1000);//2000 es la velocidad
 console.log("voy");
  return false
}
function ira2(id) {
  setTimeout(function(){ window.location.href=id;},50);
  console.log("voyyy"+id);
  window.location.href=id;

  
}

function timeira(id) {
  
  setTimeout(function(){  
       $('#header-botonexpandirmenu').removeClass('visible_menu');
    $('html, body').animate({
      scrollTop: $(id).offset().top - 200
    }, 1000);//2000 es la velocidad
   console.log("voy");
    return false }, 200);
}


function expandir(id) { 
  if(window.innerHeight < window.innerWidth){
    console.log("siii");
    quitarexpandir(id);
}
 
  id.style.setProperty("--opcion",getComputedStyle(id.children[1]).getPropertyValue("height"));
  
   $(id).toggleClass('expandir');
   if(window.innerHeight > window.innerWidth){
     $('html, body').animate({
    scrollTop: $(id).offset().top-80
  }, 1000);
  console.log("expandir");
}
 
  /**/
}

function quitarexpandir(id) //recoger acordeones
{
  var recogeracordeon = document.querySelectorAll(".opcion");
  for (var i = 0; i < recogeracordeon.length; i++) {
    let id1 = recogeracordeon[i].getAttribute('id');
       if (id && id.getAttribute('id') == id1) {
     
    } else { recogeracordeon[i].classList.remove("expandir");
   }
  }
}
$('#opcion11').click(function () {
 
  $('#opcion1').toggleClass('expandir')
 

})

//COOKIES//
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
   const botonAceptarCookies2=document.getElementById('btn-aceptar-cookies2');
   const botonAceptarCookies3=document.getElementById('btn-permitirselec-cookies');
   
   const botonconfigurarCookies = document.getElementById('btn-configurar-cookies');
   const avisoCookies = document.getElementById('aviso-cookies');
   const avisoCookies2 = document.getElementById('contenedor-seleccion-cookies');
   const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
   
   const tablero1=document.getElementById("tablero-cookie-consentimiento")
   const tablero2=document.getElementById("tablero-cookie-consentimiento-listado")
   const tablero3=document.getElementById("tablero-cookie-consentimiento-solotexto")
   
   const switchh=document.getElementById("switchid");
   const switchh1=document.getElementById("switchid1");
   dataLayer = [];
   function mostrarcookies(){
	   scrollX=0;
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
	if (localStorage.getItem('no-mostrar')) {
		switchh.checked=true;	}
	else{switchh.checked=false;};
	if (localStorage.getItem('cookies-aceptadas')) {
		switchh1.checked=true;	}
	else{switchh1.checked=false;}
	localStorage.removeItem('cookies-aceptadas');
	localStorage.removeItem('no-mostrar');
	


	
   }
   if(!localStorage.getItem('no-mostrar')){
	   avisoCookies.classList.add('activo');
	   fondoAvisoCookies.classList.add('activo');
	   switchh.checked=false;
	   switchh1.checked=false;
	   console.log("noaceptadas");
   } else if(localStorage.getItem('cookies-aceptadas')){
	   
	   dataLayer.push({'event': 'cookies-aceptadas'});
	   console.log("aceptadas");
   }
   
   botonconfigurarCookies.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
	   avisoCookies2.classList.add('activo');
	   
	   
   });
   botonAceptarCookies.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
     console.log("ACEPTADAS");
	   fondoAvisoCookies.classList.remove('activo');
      avisoCookies2.classList.remove('activo');
	   localStorage.setItem('cookies-aceptadas', true);
	   localStorage.setItem('no-mostrar',true);
	   dataLayer.push({'event': 'cookies-aceptadas'});
   });
   botonAceptarCookies2.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
	   fondoAvisoCookies.classList.remove('activo');
  		 avisoCookies2.classList.remove('activo');
	   localStorage.setItem('cookies-aceptadas', true);
	   localStorage.setItem('no-mostrar',true);
	   dataLayer.push({'event': 'cookies-aceptadas'});
   });
   
   botonAceptarCookies3.addEventListener('click', () => {
	   avisoCookies.classList.remove('activo');
	   fondoAvisoCookies.classList.remove('activo');
   avisoCookies2.classList.remove('activo');
   
   if(switchh.checked){
	   
	   localStorage.setItem('no-mostrar',true);}
	   else{
	   localStorage.removeItem('no-mostrar');};
   
   if(switchh1.checked){
	   
	   localStorage.setItem('cookies-aceptadas', true);
   dataLayer.push({'event': 'cookies-aceptadas'});}
   else{
	localStorage.removeItem('cookies-aceptadas');
   };
	   
	   
	   
   });
   
   function seleccion(id){
	   var scrollElements = document.getElementsByClassName("itemclic");
	   console.log(scrollElements);
	   scrollElements[0].classList.remove("itemclic")
	   var bot=document.getElementById(id);
	   bot.classList.add("itemclic");
	   switch (id) {
		   case "seleccion1":
			   tablero2.style.display="none";
			   tablero3.style.display="none";
			   tablero1.style.display="block";
			   break;
			   case "seleccion2":
				   tablero2.style.display="block";
			   tablero1.style.display="none";
			   tablero3.style.display="none";
			   break;
			   case "seleccion3":
				   tablero3.style.display="block";
				   tablero1.style.display="none";
				   tablero2.style.display="none";
				   break;
		   
	   
		   default:
			   break;
	   }
	   /*que mostramos*/
   }
   function box(bot){
	   console.log("box");
	   console.log(bot);
	   var bot2=document.getElementById(bot);
	   console.log(bot2.checked);
   }