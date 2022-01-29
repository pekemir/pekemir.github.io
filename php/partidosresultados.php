<?php
    $servername = "localhost";
    $database = "tablasalduie";
    $username = "root";
    $password = "";


    $respuesta=$_POST["nombre"];
 //$respuesta=$_POST["nombre"];
   $db = new mysqli($servername, $username, $password, $database);

//Verifiando el estado de la conexion
if(mysqli_connect_errno()) {
    exit("Error al conectar con la BD.");
}

//Seleccionamos el set de caracteres
mysqli_set_charset($db, "utf8");

//consultanumeroderegistros
$pr2 = $db->prepare("SELECT categoria,campeonato,dia,eqlocal,esclocal,eqvis,esvis,lugar,golocal,golvis FROM temporada2122 WHERE control='1'AND jugado='1' ");
//Indicamos los valores pasados por referencia

//Ejecutamos la consulta
if($pr2->execute()){
 $pr2->store_result();
 $pr2->bind_result($categoria,$campeonato,$dia,$eqlocal,$esclocal,$eqvis,$esvis,$lugar,$golocal,$golvis);
 $partidos = array();
$categoriaanterior="";
 while($pr2->fetch()){
  if ($categoriaanterior!=$campeonato.$categoria) {
    $partidor = array(
        "categoria"=>$categoria,
        "campeonato"=>$campeonato,
        "dia"=>$dia,
        "eqlocal"=>$eqlocal,
        "esclocal"=>$esclocal,
        "eqvis"=>$eqvis,
        "esvis"=>$esvis,
        "lugar"=>$lugar,
        "golocal"=>$golocal,
        "golvis"=>$golvis

);
    $partidos['Partidos'][] = $partidor;
    $categoriaanterior=$campeonato.$categoria;
  }
 

  
 }
}else {
	exit('Error al realizar la consulta: '.$pr2->close());
}

 

 echo json_encode($partidos);

	
	//Cerramos la conexion
	
  $pr2->close();
	
 




  ?>