var numnoticia;
var max;
var numerocontrolador;
const proximpartidos=document.getElementById('idarticulo1proximospartidos');
const otros=document.getElementById('idarticulo1proximospartidos2');
const titulocategoriaseleccionada=document.getElementById('titulocategoriaseleccionada');
var color1=" rgba(255, 255, 255, 0.349)";
var color2=" rgba(255, 255, 255, 0.749)";
window.onload = function ()
{
    console.log("holapagnoticia");
    // capturamos la url
    var loc = document.location.href;
    console.log(loc);
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        
        console.log(GET);
      
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            
          var tmp = GET[i].split('=');
          numerocontrolador=tmp[1];  
           
              
         console.log(tmp[1]);
        var numnoticia2= numerocontrolador.replace("#","")
         console.log(numnoticia2);
         numerocontrolador=numnoticia2;
           };
        console.log("finnnnnnnnnn"+numerocontrolador); 
        
        };
        
        quehacer(numerocontrolador);
};

function quehacer(numero){
   
    console.log("numeroooo"+numero);
switch (numero) {
    case '0':{ otros.style.display='none';
    ponerproximospartidos();
                break;
            }
   
    default:console.log("unooooooo");
    cargarbase(numero);
    proximpartidos.style.display='none';
        break;
}
}
    
    const requestURL = 'https://pekemir.github.io/New4.json';
    const request = new XMLHttpRequest();
    var valorinicio;
    var cantidaddenoticias;
    var noticiasmostradas=4;
    var basepartidos=null;
    var controlpagina=0;

    function cargarbase(numerocompeticion) {
        console.log("cargarrrrr"+numerocompeticion);
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
        const superNoticias = request.response;
        basepartidos=superNoticias[numerocompeticion];
        console.log(basepartidos);
       
        //showNoticias(1);
        console.log("aqui");
        titulocategoriaseleccionada.textContent=""+basepartidos.titulo;
        console.log(basepartidos['CLASIFICACION'].length);
        comprobarclasificacion();
        comprobarpartidos();
      }
      
    }
    var tblBody;
    var tabla  ;
    var body;
    function comprobarclasificacion() {
        if (basepartidos['CLASIFICACION'].length>0) {
            
            body=document.getElementById("tabla");
            tabla   = document.createElement("table");
            tblBody = document.createElement("tbody");
            crearlinea2th("CLASIFICACIÓN","","");
            if (screen.width>1023) {
                for (let i = 0; i < basepartidos['CLASIFICACION'].length; i++) {
                    var pos;
                    if (i==0) {pos="";
                        
                    }else{pos= i+"ª"}
                   
                   crearlinea(
                    pos,
                    basepartidos['CLASIFICACION'][i].escudo,
                   
                    basepartidos['CLASIFICACION'][i].nombreequipo,
                    basepartidos['CLASIFICACION'][i].jugados,
                    basepartidos['CLASIFICACION'][i].ganados,
                    basepartidos['CLASIFICACION'][i].empatados,
                    basepartidos['CLASIFICACION'][i].perdidos,
                    basepartidos['CLASIFICACION'][i].golesf,
                    basepartidos['CLASIFICACION'][i].golesc,
                    basepartidos['CLASIFICACION'][i].dfgoles,
                    basepartidos['CLASIFICACION'][i].puntos,)
                    console.log(i);
            
                };
            } else {for (let i = 0; i < basepartidos['CLASIFICACION'].length; i++) {
                var pos;
                if (i==0) {pos="";
                    
                }else{pos= i+"ª"}
                
               crearlineacorta(
                pos,
                    basepartidos['CLASIFICACION'][i].escudo,
                   
                    basepartidos['CLASIFICACION'][i].nombreequipo,
                    basepartidos['CLASIFICACION'][i].jugados,
                    basepartidos['CLASIFICACION'][i].ganados,
                    basepartidos['CLASIFICACION'][i].empatados,
                    basepartidos['CLASIFICACION'][i].perdidos,
                    
                    basepartidos['CLASIFICACION'][i].puntos,)
                
        
            };
                
            }
           
            // posiciona el <tbody> debajo del elemento <table>
           tabla.appendChild(tblBody);
           // appends <table> into <body>
               body.appendChild(tabla);
           // modifica el atributo "border" de la tabla y lo fija a "2";
             tabla.setAttribute("border", "2");
            console.log("cargadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            control=0;
            
        }
        
    }
    function creartd(dato,hilera ) {
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(dato);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
        
      }
      function creartdcolor(dato,hilera,color ) {
          var pintado;
          if (color==1) {
              pintado=color1
          } else {pintado=color2
              
          }
          
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(dato);
        celda.style.backgroundColor=pintado;    
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
            
          }
          function creartdcolorestrecha(dato,hilera,color ) {
            var pintado;
            if (color==1) {
                pintado=color1
            } else {pintado=color2
                
            }
            
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode(dato);
         
          celda.style.backgroundColor=pintado;  
          celda.className="estrecha";
          
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
              
            }
            function creartdcolorestrechabold(dato,hilera,color ) {
              var pintado;
              if (color==1) {
                  pintado=color1
              } else {pintado=color2
                  
              }
              
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(dato);
           
            celda.style.backgroundColor=pintado;  
            celda.className="estrecha";
            celda.style.fontWeight="bold";
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
                
              }
      function crearth(dato,hilera ) {
         
    var celda = document.createElement("th");
    celda.colSpan="3"
    var textoCelda = document.createTextNode(dato);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
        
      }
    
      function crearlinea(posicion,escudo,nequipo,jugados,gan,emp,per,gf,gc,dg,ptos) {
        var hilera = document.createElement("tr");
    
    creartd(posicion,hilera);
    if (escudo!="") {
        creartdimagen(escudo,hilera);
    }else{
        creartd("",hilera);
    }
    
    
    creartd(nequipo,hilera);
    creartd(jugados,hilera);
    creartd(gan,hilera);
    creartd(emp,hilera);
    creartd(per,hilera);
    creartd(gf,hilera);
    creartd(gc,hilera);
    creartd(dg,hilera);
    creartd(ptos,hilera);
   
    
    
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
      }
      function crearlineacorta(posicion,escudo,nequipo,jugados,gan,emp,per,ptos) {
        var hilera = document.createElement("tr");
    
        creartd(posicion,hilera);
        if (escudo!="") {
            creartdimagen(escudo,hilera);
        }else{
            creartd("",hilera);
        }
        creartd(nequipo,hilera);
        creartd(jugados,hilera);
        creartd(gan,hilera);
        creartd(emp,hilera);
        creartd(per,hilera);
        creartd(ptos,hilera);
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
     }
      function crearlinea2(posicion,equipo,ganados) {
        var hilera = document.createElement("tr");
    
    creartd(posicion,hilera);
    creartd(equipo,hilera);
    creartd(ganados,hilera);
     // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
      }
      function crearlinea2color(posicion,equipo,ganados,color) {
        var hilera = document.createElement("tr");
    
    creartdcolor(posicion,hilera,color);
    creartdcolorestrecha(equipo,hilera,color);
    creartdcolor(ganados,hilera,color);
     // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
      }
      function crearlinea2colorbold(posicion,equipo,ganados,color) {
        var hilera = document.createElement("tr");
    
    creartdcolor(posicion,hilera,color);
    creartdcolorestrechabold(equipo,hilera,color);
    creartdcolor(ganados,hilera,color);
     // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
      }
      function crearlinea2th(posicion,equipo,ganados) {
        var hilera = document.createElement("tr");
        crearth(posicion,hilera);
    
     // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
    
      }
      function creartdimagen(dato,hilera ) {
        var celda = document.createElement("td");
        
        var celda2 = document.createElement('img');
        celda2.src="imagenes/escudos/"+dato;
   
    celda.appendChild(celda2);
    hilera.appendChild(celda);
        
      }
      function comprobarpartidos() {
        console.log("comprobarpartidos");
        if (basepartidos['JORNADAS'].length>0) {
            
            body=document.getElementById("tabla2");
           
            var basee=basepartidos['JORNADAS'];
            console.log(basee);
            var color=1;
            const imagenn = document.getElementById("mitable");	
            if (!imagenn){console.log("no");
                  
              tabla   = document.createElement("table");
                  tabla.id="mitable";
            } else {
              padre = imagenn.parentNode;
              padre.removeChild(imagenn);
                  tabla   = document.createElement("table");
                  tabla.id="mitable";
            };
              const imagenn2 = document.getElementById("mi tblBody");	
            if (!imagenn2){console.log("no");
              tblBody = document.createElement("tbody");
                  tblBody.id="mi tblBody";
            } else {
              padre = imagenn2.parentNode;
              padre.removeChild(imagenn2);
                  tblBody = document.createElement("tbody");
                  tblBody.id="mi tblBody";
            };
              

            for (let i = 0; i < basee.length; i++) {
                var tipopartido=basee[i][0];
                 crearlinea2th(tipopartido,"","");
                for (let index = 1; index < basee[i].length; index++) {
                  console.log(basee[i][index].fecha,
                    basee[i][index].hora,
                    basee[i][index].campo,);
                  crearlinea2color(
               
                basee[i][index].fecha,
                basee[i][index].hora,
                basee[i][index].campo,
                color
               
               )
               crearlinea2colorbold(
                basee[i][index].local,
                basee[i][index].resultado,
                basee[i][index].visitante,
                color
               )
                
                if (color==1) {color=0
            
                 } else {color=1
            
        }
        
             } };
            // posiciona el <tbody> debajo del elemento <table>
           tabla.appendChild(tblBody);
           // appends <table> into <body>
               body.appendChild(tabla);
           // modifica el atributo "border" de la tabla y lo fija a "2";
             tabla.setAttribute("border", "2");
            console.log("cargadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            control=0;
            
        }
        
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
  }}



    function inicioproxpartidos() {var peke =0;
      console.log("inicooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
          body=document.getElementById("tablaproxpartidos");
        
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
         
          
          
      }
  
      
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
