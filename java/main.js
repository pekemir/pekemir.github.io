/*aparecerobjetos*/

function reveal() {
  var reveals = document.querySelectorAll(".js-scroll");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    
    console.log(elementTop);
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/*aparecerobjetos metodo2*/
const header=document.getElementById('controlheader')
const scrollElements = document.querySelectorAll(".js-scrollheader");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
return (
    (elementTop +window.innerHeight-100<=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  ))
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)||-10
  );
};

const displayScrollElement = (element) => {
  header.classList.add("headeractivo");
};

const hideScrollElement = (element) => {
  header.classList.remove("headeractivo");
};

var control=1;
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (el.getBoundingClientRect().top==0) {
     control=1 
    }
   if (elementInView(el, 1.25)&& control==1) {
      displayScrollElement(el);
      control=0;
    } else if (elementOutofView(el)&& control==1) {
      console.log("RESTOOTRO");
      hideScrollElement(el)
    }
  })
}
/*fin aparecer objetos metodo2*/
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
  reveal()
});
/*fin aparecer objetos*/

/*php*/
let $imagennoticiasfija1 = document.querySelector('#articulonoticia1');
let $imagennoticiasfija2 = document.querySelector('#articulonoticia2');
let $imagennoticiasfija3 = document.querySelector('#articulonoticia3');
///const titulonoticiasfija1= document.getElementById('dp2div1doscarruselimagentitulotitulonotician1');
//const fechanoticiasfija1=document.getElementById('dp2div1doscarruselpiefechanoticiasn1');
//const textocortonoticiasfija1=document.getElementById('dp2div1doscarruselpieinicionoticia1texto');
//const titulonoticiasfija2= document.getElementById('dp2div1doscarruselimagentitulotitulonotician2');
//const fechanoticiasfija2=document.getElementById('dp2div1doscarruselpiefechanoticiasn2');
//const textocortonoticiasfija2=document.getElementById('dp2div1doscarruselpieinicionoticia2texto');

let intervalonoticias;
var noticiassnoticias=null;
var IMAGENESnoticias;
var TITULOSnoticias;
var FECHASnoticias;
var TEXTOnoticias;
var noticiass=null;
var noticias= null;
window.onload= function(){cargarimagenesnoticiasonload();}
function cargarimagenesnoticiasonload(){
  $.ajax({
      url: 'http://localhost:82/php/noticias.php',
      type: 'POST',
      data: "nombre=5&pagina=1",
      success: function(data){
      console.log(data);
      
      const noticias4= JSON.parse(data);
      noticias=noticias4;
      console.log(noticias);

      let array = noticias.Noticias[1].imagenes.split(',',1);
  let ruta1="url(imagenes/noticias/"+ array[0]+")";
  array = noticias.Noticias[2].imagenes.split(',',1);
  let ruta2="url(imagenes/noticias/"+ array[0]+")";
  array = noticias.Noticias[3].imagenes.split(',',1);
  let ruta3="url(imagenes/noticias/"+ array[0]+")";
  array = noticias.Noticias[4].imagenes.split(',',1);
  let ruta4="url(imagenes/noticias/"+ array[0]+")";
     IMAGENESnoticias = [
         ruta1,ruta2,ruta3,ruta4
       ];
       console.log(IMAGENESnoticias);
       $imagennoticiasfija1.style.background = "var(--degradadonoticia),"+IMAGENESnoticias[3];

       $imagennoticiasfija1.style.backgroundSize="cover";
       $imagennoticiasfija2.style.background = "var(--degradadonoticia),"+IMAGENESnoticias[1];
       $imagennoticiasfija2.style.backgroundSize="cover";
       $imagennoticiasfija3.style.background = "var(--degradadonoticia),"+IMAGENESnoticias[2];
          $imagennoticiasfija3.style.backgroundSize="cover";
      
       
       
       TITULOSnoticias=[
          ''+noticias.Noticias[1].titulo,
         ''+ noticias.Noticias[2].titulo,
          ''+noticias.Noticias[3].titulo,
          ''+noticias.Noticias[4].titulo,
       ];
       TEXTOnoticias=[
          ''+noticias.Noticias[1].noticiacorta,
          ''+ noticias.Noticias[2].noticiacorta,
           ''+noticias.Noticias[3].noticiacorta,
           ''+noticias.Noticias[4].noticiacorta,
       ];
       FECHASnoticias=[
          ''+noticias.Noticias[1].fecha,
          ''+ noticias.Noticias[2].fecha,
           ''+noticias.Noticias[3].fecha,
           ''+noticias.Noticias[4].fecha,
       ]
       console.log(TEXTOnoticias);
      // next(); 
      }
    });
   

               
                
                }