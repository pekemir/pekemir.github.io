    var numequipo;
  
    
    const requestURL = 'https://pekemir.github.io/equipo.json';
    const request = new XMLHttpRequest();
    const contenedortitulo = document.getElementById("tituloequipo");
    const fondoequipo=document.getElementById('imagenequipo');

var equiposs=null;


window.onload = function getGET()
{
    console.log("holapagequipo");
    // capturamos la url
    var loc = document.location.href;
    console.log(loc);
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        console.log(getString);
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        console.log(GET);
      
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
               numequipo=tmp[1];     
            
           var numequipo2= numequipo.replace("#","")
           
            numequipo=numequipo2;
           
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
            const superEquipos = request.response;
            equiposs=superEquipos[numequipo];    
            var numero=parseInt(numequipo, 10);
         
            console.log(equiposs);
            showequipo()}
        }
        return get;
        
       
    }
    
}
function showequipo() { 
   
    var ruta='url(imagenes/equipos/'+ equiposs.foto+')';
    contenedortitulo.textContent = equiposs.titulo;
    fondoequipo.style.backgroundImage=ruta;
    body=document.getElementById("tablajugadores");
    tabla   = document.createElement("table");
    tblBody = document.createElement("tbody");
    tabla.id="mitblBody";
    crearlinea("Dorsal","Nombre","Año");
    for (let index = 0; index < equiposs.jugadores.length; index++) {

        console.log(equiposs.jugadores[index].nombre);
        console.log("NEXT"+index);
        crearlinea(equiposs.jugadores[index].dorsal,equiposs.jugadores[index].nombre,equiposs.jugadores[index].año)
    }
     // posiciona el <tbody> debajo del elemento <table>
     tabla.appendChild(tblBody);
     // appends <table> into <body>
         body.appendChild(tabla);
     // modifica el atributo "border" de la tabla y lo fija a "2";
       tabla.setAttribute("border", "1");
    
}
function crearlinea(Dorsal,Nombre,Añonacimiento) {
    var hilera = document.createElement("tr");

creartd(Dorsal,hilera);
creartdlarga(Nombre,hilera);
creartd(Añonacimiento,hilera);
tblBody.appendChild(hilera);
}
  function creartd(dato,hilera ) {
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(dato);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
        
      }
      function creartdlarga(dato,hilera ) {
        var celda = document.createElement("td");
        celda.id="celdalarga"
        var textoCelda = document.createTextNode(dato);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
            
          }
    