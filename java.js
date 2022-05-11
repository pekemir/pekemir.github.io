var tope = 0;
const redes = document.getElementById('redes')
const idheader = document.getElementById('idheader');
const fondomenu = document.getElementById('fondomenu');
const listamenu = document.getElementById('listamenu');
const iconosredes = document.getElementById('iconosredes');


function revealheader() {
 /*console.log(window.scrollY);
  console.log("ree");*/
  redes.classList.remove('mostrarredes');
  iconosredes.classList.remove('circulo2mas')
  
  var reveals = document.querySelectorAll(".scrollheader");
  let windy = window.scrollY;
  let top2 = window.innerHeight;
 /* console.log(top2);*/
  tope = top2/2;

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
    }
  }
 
}
window.addEventListener("scroll", revealheader);

$('#botonexpandirmenu').click(function () {
  clickexpanmenu();
})

function clickexpanmenu() {redes.classList.remove('mostrarredes');
iconosredes.classList.remove('circulo2mas')
 // Al hacer click...
console.log(window.scrollY + "tope" + tope);
$('#botonexpandirmenu').toggleClass('visible_menu');/*botonhamburgesa*/
if (window.scrollY <= tope) {
  idheader.classList.add('desdeinicio');
  fondomenu.classList.add('despuesiniciofondomenu');
  listamenu.classList.add('despuesiniciofondomenu');
  $('#idheader').toggleClass('scrolled');
  togledesplegar()
}
else {
  idheader.classList.add('desdeinicio');
  fondomenu.classList.add('despuesiniciofondomenu');
  listamenu.classList.add('despuesiniciofondomenu');
  togledesplegar()
}
  
}

$('#fondomenu').click(function () {
  redes.classList.remove('mostrarredes');
  if (window.scrollY <= tope) {
    idheader.classList.add('desdeinicio');
    fondomenu.classList.add('despuesiniciofondomenu');
    listamenu.classList.add('despuesiniciofondomenu');
    $('#idheader').toggleClass('scrolled');
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

$('#iconosredes').click(function () {
  toglerecoger();
  $('#iconosredes').toggleClass('circulo2mas')
  iconosredes.classList.add('circulo2masmas')
  $('#redes').toggleClass('mostrarredes');

})
function togledesplegar() {
  $('#fondomenu').toggleClass('desplegar');
  $('#listamenu').toggleClass('desplegar');
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
  $('#botonexpandirmenu').removeClass('visible_menu');
  $('html, body').animate({
    scrollTop: $(id).offset().top - 120
  }, 1000);//2000 es la velocidad
 console.log("voy");
  return false
}

function timeira(id) {
  setTimeout(function(){ ira(id) }, 200);
}
$(document).ready(function () {
  $("#aqui_menu").load('index3.html');
  return false;
})

function expandir(id) { 
  
 

 id.style.setProperty("--opcion",getComputedStyle(id.children[1]).getPropertyValue("height"));
 
  quitarexpandir(id);
   $(id).toggleClass('expandir');
 
   $('html, body').animate({
    scrollTop: $(id).offset().top-80
  }, 1000);
  console.log("expandir");
}

function quitarexpandir(id) //recoger acordeones
{
  var recogeracordeon = document.querySelectorAll(".opcion");
  for (var i = 0; i < recogeracordeon.length; i++) {
    let id1 = recogeracordeon[i].getAttribute('id');
    if (id.getAttribute('id') == id1) {
      console.log('yes');
    } else { recogeracordeon[i].classList.remove("expandir");
   }
  }
}
$('#opcion11').click(function () {
 
  $('#opcion1').toggleClass('expandir')
 

})