var tope = 0;
const redes = document.getElementById('redes')
const idheader = document.getElementById('idheader');
const fondomenu = document.getElementById('fondomenu');
const listamenu = document.getElementById('listamenu');
const iconosredes = document.getElementById('iconosredes')

function revealheader() {
  console.log(window.scrollY);
  console.log("ree");
  redes.classList.remove('mostrarredes');
  iconosredes.classList.remove('circulo2mas')
  
  var reveals = document.querySelectorAll(".scrollheader");
  let windy = window.scrollY;
  let top2 = window.innerHeight;
  console.log(top2);
  tope = top2 - 200;

  for (var i = 0; i < reveals.length; i++) {
    if (windy > tope) {
      console.log(window.scrollY);
      console.log("scrolled");
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
  redes.classList.remove('mostrarredes');
  iconosredes.classList.remove('circulo2mas')
   // Al hacer click...
  console.log(window.scrollY + "tope" + tope);
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
})

//fondomenu.addEventListener("click", modifyText, false);
function modifyText() {
  console.log("hola");

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

function showmenu(id) {

  quitarshow(id);
  $(id).toggleClass('show');

}
function quitarshow(id) //recoger acordeones
{
  var recogeracordeon = document.querySelectorAll(".elementomenuacordeon");
  for (var i = 0; i < recogeracordeon.length; i++) {
    let id1 = "#" + recogeracordeon[i].getAttribute('id');
    if (id == id1) {
    } else { recogeracordeon[i].classList.remove("show"); }
  }
}

function ira(id) { //IR A SITIO DE LA MISMA PAGINA id con #
  togledesplegar();
  $('html, body').animate({
    scrollTop: $(id).offset().top - 80
  }, 2000);//2000 es la velocidad
  console.log(window.scrollX);
  console.log("ira");
  return false
}
$(document).ready(function () {
  $("#aqui_menu").load('index3.html');
  return false;
})