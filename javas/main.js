const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
let posicionActual = 0;
const imagen = document.getElementById('indexcontenedor1contenedorimagenimagen');
const titul= document.getElementById('indexcontenedor1contenedorimagentituloh1');
const titul2=document.getElementById('indexcontenedor1contenedorimagentitulo2h2');
const boton=document.getElementById('indexcontenedor1contenedorimagenbotonboton');

const titul222= document.getElementById('indexcontenedor1contenedorimagentitulo');
const titul22=document.getElementById('indexcontenedor1contenedorimagentitulo2');
const boton2=document.getElementById('indexcontenedor1contenedorimagenboton');
let intervalo;
const requestURL = 'https://pekemir.github.io/noticias.json';
const request = new XMLHttpRequest();
var cantidaddenoticias;
var noticiass=null;
var IMAGENES;
var TITULOS;
var TITULOS2;
var BOTONES;
const salduie='Hockey Salduie 78';
const somos='#somossalduie#';
const conocenos='CONOCENOS';

function next1(){
    if(screen.width>1023){console.log("masde1023"); iniciopatallagrande();
    iniciopantallagrandenoticias();}
    else{console.log("menosde1023");
    iniciopantallapequeña();
    console.log("fin");
    iniciopatallapequeñanoticias();
   
    }
    ponerproximospartidos();
}
function next2(){
    if(screen.width>1023){console.log("masde1023");
    iniciopatallagrande();
     iniciopantallagrandenoticias()}
     else{console.log("menosde1023");
    iniciopantallapequeña();
    console.log("fin"); 
    iniciopatallapequeñanoticias();}
    ponerproximospartidos();
}

window.onload= function(){cargarimagenesnoticiasonload();
    
   
                       }
window.onresize= function(){cargarimagenesnoticiasonresize();
    
                             }


function iniciopatallagrande(){

    stopIntervalo(intervalo);
    posicionActual = 0;
    console.log("grande");
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    const superNoticias = request.response;
    noticiass=superNoticias;
    console.log(noticiass);
    const noticias = noticiass['noticias'];
    cantidaddenoticias=noticias.length;
    console.log("aqui");
    console.log(cantidaddenoticias);
 IMAGENES = [
     'url(imagenes/fondosfijos/sudadera.jpg)',
     'url(imagenes/noticias/'+ noticias[cantidaddenoticias-1].imagen+'.jpg)',
     'url(imagenes/noticias/'+ noticias[cantidaddenoticias-2].imagen+'.jpg)',
     'url(imagenes/fondosfijos/escuela33.jpg',
     'url(imagenes/fondosfijos/horagratis.png)',
     /* 'url(imagenes/noticias/'+ noticias[cantidaddenoticias-4].imagen+'.jpg)',*/
 ];
 for (let index = 0; index < IMAGENES.length; index++) {
    imagen.style.backgroundImage = IMAGENES[index];
     
 }
 TITULOS=[
     salduie,
    '',
    '',
    '¿Ven a probar!',
    '',
 ];
 TITULOS2=[
     somos,
     ''+ noticias[cantidaddenoticias-1].titulo,
     ''+ noticias[cantidaddenoticias-2].titulo,
     'Te esperamos...',
     '',
 ]
 BOTONES=[
     conocenos,
     'NOTICIAS',
     'NOTICIAS',
     '+INFO',
     '+INFO',
 ]
 imagen.style.backgroundImage = IMAGENES[posicionActual];
 titul.textContent=TITULOS[posicionActual];
 titul2.textContent=TITULOS2[posicionActual];
 boton.textContent=BOTONES[posicionActual];
  }
 playIntervalo();
}
function iniciopantallapequeña(){
    console.log("pequeña");
    stopIntervalo();
    console.log ("finppequeña");
}
function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    if(screen.width>1023){
            renderizarImagen();}
    else{   stopIntervalo();
            renderizarimageninicio();
    }

}
function renderizarimageninicio(){
    setTimeout(function() {
        imagen.style.animation='';
        titul222.style.animation='';
        titul22.style.animation='';
        boton2.style.animation='';
    }, 0);
    imagen.style.backgroundImage = 'url(imagenes/fondosfijos/sudadera.jpg)';
    titul.textContent=salduie;
    titul2.textContent=somos;
    boton.textContent=conocenos;
  
}
function renderizarImagen () {
   
    imagen.style.backgroundImage = IMAGENES[posicionActual];
    titul.textContent=TITULOS[posicionActual];
    titul2.textContent=TITULOS2[posicionActual];
    boton.textContent=BOTONES[posicionActual];
}

 function playIntervalo() {
    
     setTimeout(function() {
        imagen.style.animation='';
        titul222.style.animation='';
        titul22.style.animation='';
        boton2.style.animation='';
        }, 0);
     
     titul222.style.opacity='0';
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
     }
     function stopIntervalo() {
        console.log("stop");
        clearInterval(intervalo);
        intervalo=null;
        imagen.style.animation='none';
        titul222.style.animation='none';
        titul22.style.animation='none';
        boton2.style.animation='none';
        renderizarimageninicio();
    }

        const TIEMPO_INTERVALO_MILESIMAS_SEG_NOTICIAS = 5000;
        let posicionActualnoticias = 0;
        let $imagennoticias = document.querySelector('#dp2div1doscarruselimagenimagen');
        const titulonoticias= document.getElementById('dp2div1doscarruselimagentitulotitulonoticia');
        const fechanoticias=document.getElementById('dp2div1doscarruselpiefechanoticias');
        const titulonoticias2= document.getElementById('dp2div1doscarruselimagentitulotitulonoticia');
        let $imagennoticiasfija1 = document.querySelector('#dp2div1doscarruselimagenimagenn1');
        const titulonoticiasfija1= document.getElementById('dp2div1doscarruselimagentitulotitulonotician1');
        const fechanoticiasfija1=document.getElementById('dp2div1doscarruselpiefechanoticiasn1');
        const textocortonoticiasfija1=document.getElementById('dp2div1doscarruselpieinicionoticia1texto');
        let $imagennoticiasfija2 = document.querySelector('#dp2div1doscarruselimagenimagenn2');
        const titulonoticiasfija2= document.getElementById('dp2div1doscarruselimagentitulotitulonotician2');
        const fechanoticiasfija2=document.getElementById('dp2div1doscarruselpiefechanoticiasn2');
        const textocortonoticiasfija2=document.getElementById('dp2div1doscarruselpieinicionoticia2texto');
        const titul22n=document.getElementById('indexcontenedor1contenedorimagentitulo2');
        const boton2n=document.getElementById('indexcontenedor1contenedorimagenboton');
        let intervalonoticias;
        var noticiassnoticias=null;
        var IMAGENESnoticias;
        var TITULOSnoticias;
        var FECHASnoticias;
        var TEXTOnoticias;
        function cargarimagenesnoticiasonresize(){
            
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
                
            const superNoticias = request.response;
            noticiassnoticias=superNoticias;
            
            const noticias = noticiassnoticias['noticias'];
            cantidaddenoticias=noticias.length;
            
         IMAGENESnoticias = [
            'url(imagenes/noticias/'+ noticias[cantidaddenoticias-1].imagen+'.jpg)',
             'url(imagenes/noticias/'+ noticias[cantidaddenoticias-2].imagen+'.jpg)',
             'url(imagenes/noticias/'+ noticias[cantidaddenoticias-3].imagen+'.jpg)',
             'url(imagenes/noticias/'+ noticias[cantidaddenoticias-4].imagen+'.jpg)',
             /* 'url(imagenes/noticias/'+ noticias[cantidaddenoticias-4].imagen+'.jpg)',*/
         ];
         TITULOSnoticias=[
            ''+noticias[cantidaddenoticias-1].titulo,
           ''+ noticias[cantidaddenoticias-2].titulo,
            ''+noticias[cantidaddenoticias-3].titulo,
            ''+noticias[cantidaddenoticias-4].titulo,
         ];
         TEXTOnoticias=[
            ''+noticias[cantidaddenoticias-1].textocorto,
           ''+ noticias[cantidaddenoticias-2].textocorto,
            ''+noticias[cantidaddenoticias-3].textocorto,
            ''+noticias[cantidaddenoticias-4].textocorto,
         ];
         FECHASnoticias=[
           ''+ noticias[cantidaddenoticias-1].fecha,
           ''+ noticias[cantidaddenoticias-2].fecha,
            ''+noticias[cantidaddenoticias-3].fecha,
            ''+noticias[cantidaddenoticias-4].fecha,
         ]
         console.log("HOLAAAAA" +IMAGENESnoticias[0]);
         console.log("finnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
          next2();
          }
         
        }  
function cargarimagenesnoticiasonload(){
   
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    const superNoticias = request.response;
    noticiassnoticias=superNoticias;
    
    const noticias = noticiassnoticias['noticias'];
    cantidaddenoticias=noticias.length;
    
 IMAGENESnoticias = [
    'url(imagenes/noticias/'+ noticias[cantidaddenoticias-1].imagen+'.jpg)',
     'url(imagenes/noticias/'+ noticias[cantidaddenoticias-2].imagen+'.jpg)',
     'url(imagenes/noticias/'+ noticias[cantidaddenoticias-3].imagen+'.jpg)',
     'url(imagenes/noticias/'+ noticias[cantidaddenoticias-4].imagen+'.jpg)',
     /* 'url(imagenes/noticias/'+ noticias[cantidaddenoticias-4].imagen+'.jpg)',*/
 ];
 for (let index = 0; index < IMAGENESnoticias.length; index++) {
    $imagennoticias.style.backgroundImage = IMAGENESnoticias[index];
     console.log(IMAGENESnoticias[index]);
 }
 $imagennoticias.style.backgroundImage ='url(imagenes/fondosfijos/noticiasweb.jpg)';
 
 TITULOSnoticias=[
    ''+noticias[cantidaddenoticias-1].titulo,
   ''+ noticias[cantidaddenoticias-2].titulo,
    ''+noticias[cantidaddenoticias-3].titulo,
    ''+noticias[cantidaddenoticias-4].titulo,
 ];
 TEXTOnoticias=[
    ''+noticias[cantidaddenoticias-1].textocorto,
   ''+ noticias[cantidaddenoticias-2].textocorto,
    ''+noticias[cantidaddenoticias-3].textocorto,
    ''+noticias[cantidaddenoticias-4].textocorto,
 ];
 FECHASnoticias=[
   ''+ noticias[cantidaddenoticias-1].fecha,
   ''+ noticias[cantidaddenoticias-2].fecha,
    ''+noticias[cantidaddenoticias-3].fecha,
    ''+noticias[cantidaddenoticias-4].fecha,
 ]
 
  next1();
  }
 
}         
function iniciopatallapequeñanoticias(){
   
    stopIntervalonoticias(intervalonoticias);
    console.log("aqui");
    posicionActualnoticias = 0;
   
   
 playIntervalonoticias();
}
function iniciopantallagrandenoticias(){
    console.log("iniciopantallagrandenoticias");
    stopIntervalonoticias();
    renderizarimageninicionoticias()

}
function pasarFotonoticias() {
    console.log("posicionactual");
        if(posicionActualnoticias >= IMAGENESnoticias.length - 1) {
        posicionActualnoticias = 0;
    } else {
        posicionActualnoticias++;
    }
console.log(posicionActualnoticias);
    if(screen.width<1023){
        console.log("aqui");
            renderizarimagennoticias();}
    else{   
        console.log("pause"); stopIntervalonoticias();
            renderizarimageninicionoticias();
    }

}
function renderizarimageninicionoticias(){
  
    $imagennoticiasfija1.style.backgroundImage = IMAGENESnoticias[0];
    titulonoticiasfija1.textContent=TITULOSnoticias[0];
    fechanoticiasfija1.textContent=FECHASnoticias[0];
    textocortonoticiasfija1.textContent=TEXTOnoticias[0];
    $imagennoticiasfija2.style.backgroundImage = IMAGENESnoticias[1];
    titulonoticiasfija2.textContent=TITULOSnoticias[1];
    textocortonoticiasfija2.textContent=TEXTOnoticias[1];
    fechanoticiasfija2.textContent=FECHASnoticias[1];
    
}
function renderizarimagennoticias () {
   
    titulonoticias2.style.animationName=''
    titulonoticias2.style.animationDuration='';
   
    setTimeout(function() {
       
        titulonoticias2.style.animationName='opacidad3'
        titulonoticias2.style.animationDuration='4s';
    }, 0);
    
    $imagennoticias.style.backgroundImage = IMAGENESnoticias[posicionActualnoticias];
    titulonoticias.textContent=TITULOSnoticias[posicionActualnoticias];
    fechanoticias.textContent=FECHASnoticias[posicionActualnoticias];
    
}

 function playIntervalonoticias() {
     console.log("inicio");
     setTimeout(function() {
        $imagennoticias.style.animation='';
        titulonoticias2.style.animation='';
        titulonoticias2.style.animationName='opacidad3'
        titulonoticias2.style.animationDuration='4s';
        
    }, 0);
    
    /*titul222.style.opacity='0';*/
    intervalonoticias = setInterval(pasarFotonoticias, TIEMPO_INTERVALO_MILESIMAS_SEG_NOTICIAS);
  }
  function stopIntervalonoticias() {
      console.log("stop");
        clearInterval(intervalonoticias);
        intervalonoticias=null;
        $imagennoticias.style.animation='none';
        titulonoticias2.style.animation='none';
        /*titul222.style.animation='none';*/
        
      /*  renderizarimageninicionoticias();*/
    
}

function irasegunboton(){
    let nomboton=boton.textContent
    let pagina=''
    console.log(nomboton);
    switch (nomboton) {
        case 'CONOCENOS':
            console.log(nomboton);
            pagina='sobrenosotros.html';break;
            case 'NOTICIAS':
                console.log(nomboton);
                pagina='noticias.html';break;
                case '+INFO':
                    console.log(nomboton);
                    pagina='escuelas.html';break;
       
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
      location.href=pagina;
}
var basepartidos;
var keyCount;
function ponerproximospartidos() {
const requestURL2 = 'https://pekemir.github.io/New4.json';
const request2 = new XMLHttpRequest();

request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();
request2.onload = function() {
const superNoticias2 = request2.response;
basepartidos=superNoticias2;
console.log(basepartidos);
//showNoticias(1);
console.log("aqui");
keyCount  = Object.keys(basepartidos).length;
inicioproxpartidos();
}
}
    var tblBody;
    var tabla  ;
    var body;
    
    var color1="rgba(255, 255, 255, 0.529)";
function inicioproxpartidos() {
    
    var peke =0;
    console.log("inicooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
        body=document.getElementById("tablaindex1");
      
        const imagenn = document.getElementById("mitable");	
	if (!imagenn){
        
		tabla   = document.createElement("table");
        tabla.id="mitable";
	} else {
		padre = imagenn.parentNode;
		padre.removeChild(imagenn);
        tabla   = document.createElement("table");
        tabla.id="mitable";
	};
    const imagenn2 = document.getElementById("mi tblBody");	
	if (!imagenn2){
		tblBody = document.createElement("tbody");
        tblBody.id="mi tblBody";
	} else {
		padre = imagenn2.parentNode;
		padre.removeChild(imagenn2);
        tblBody = document.createElement("tbody");
        tblBody.id="mi tblBody";
	};
    
        
       
        
    var cotro=0;
    for (let index = 1; index < keyCount; index++) {
        cotro=0;
       
        for (let index2 = 0; index2 < basepartidos[index]['JORNADAS'].length; index2++) {
            
            for (let index3 = 1; index3 < basepartidos[index]['JORNADAS'][index2].length; index3++) {
               /* console.log(basepartidos[index]['JORNADAS'][index2][index3]);*/
               var cc=basepartidos[index]['JORNADAS'][index2][index3];
                if (cc.resultado =='-' && (cc.local.includes('SALDUIE') ||cc.visitante.includes('SALDUIE'))&& cc.campo!='---') {
                    /*console.log(basepartidos[index]['JORNADAS'][index2][index3]);*/
                 peke=peke+1;
                   cotro=1;
                   crearlinea2th(basepartidos[index].titulo,"","");
                   console.log("esta");
                   crearlinea2color(
           
                    cc.fecha,
                    cc.hora,
                    cc.campo,
                    color1
                   
                   )
                   crearlinea2colorescudo(
                    cc.local,
                    cc.resultado,
                    cc.escudo1,
                    cc.escudo2,
                    cc.visitante,
                    color1
                   )
                   /*console.log("out");*/
                   break;
                }

                if (cotro==1) {
                   /* console.log("out2");*/
                    break
                    
                }
                

        }
      /*  console.log(basepartidos[index].titulo);*/
      if (cotro==1) {
      /*  console.log("out2");*/
        break
}
        
    }
    

    
        // posiciona el <tbody> debajo del elemento <table>
       tabla.appendChild(tblBody);
       // appends <table> into <body>
           body.appendChild(tabla);
       // modifica el atributo "border" de la tabla y lo fija a "2";
         tabla.setAttribute("border", "2");
        console.log("cargadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        
        
    }

    
}
function crearlinea2color(fecha,hora,lugar,color) {
    var hilera = document.createElement("tr");

creartdcolor(fecha,hilera,color);
creartdcolorestrecha(hora,hilera,color);
creartdcolor(lugar,hilera,color);
 // agrega la hilera al final de la tabla (al final del elemento tblbody)
tblBody.appendChild(hilera);

  }
  function creartdcolor(dato,hilera,color ) {
    var pintado;
    if (color==1) {
        pintado=color1
    } else {pintado=color1
        
    }
    
  var celda = document.createElement("td");
  var textoCelda = document.createTextNode(" "+dato+" ");
  
  celda.style.backgroundColor=pintado;
  
    
 celda.appendChild(textoCelda);
  
  hilera.appendChild(celda);
      
    }
    function crearlinea2colorescudo(local,resultado,escudo1,escudo2,visitante,color) {
        var hilera = document.createElement("tr");
        var equipo=local;
    if (equipo.includes('SALDUIE')) {
        console.log("okkkkkkkkkkkkKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
        
    }else{
        console.log("okkkkkkkkkkkk");
    }
    console.log(local);
    creartdcolorescudo(local,escudo1,hilera,color);
    creartdcolorestrecha(resultado,hilera,color);
    creartdcolorescudo(visitante,escudo2,hilera,color);
     // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
      }
     
    function creartdcolorescudo(equipo,escudo,hilera,color ) {
        var pintado;
        if (color==1) {
            pintado=color1
        } else {pintado=color1
            
        }
        
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(" "+equipo+" ");
      var imag=document.createElement("img");
      celda.style.backgroundColor=pintado;
      imag.src="imagenes/escudos/"+escudo;
      imag.style.width="3vh";
        
        celda.appendChild(imag);
     celda.appendChild(textoCelda);
      
      hilera.appendChild(celda);
          
        }
    function creartdcolorestrecha(dato,hilera,color ) {
      var pintado;
      if (color==1) {
          pintado=color1
      } else {pintado=color1
          
      }
      
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(dato);
    celda.style.backgroundColor=pintado;  
    celda.className="estrecha";
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
        
      }
      function crearlinea2th(posicion,equipo,ganados) {
        var hilera = document.createElement("tr");
        crearth(posicion,hilera);
    
     // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    
      }

      function crearth(dato,hilera ) {
         
        var celda = document.createElement("th");
        celda.colSpan="3";
        celda.style.backgroundColor=color1;
        var textoCelda = document.createTextNode(dato);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
            
          }

