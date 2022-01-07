<?php
 $servername = "localhost";
$database = "tablasalduie";
$username = "root";
$password = "";


$respuesta=$_POST["pagina"];
 //$respuesta=$_POST["nombre"];
   $db = new mysqli($servername, $username, $password, $database);

//Verifiando el estado de la conexion
if(mysqli_connect_errno()) {
    exit("Error al conectar con la BD.");
}

//Seleccionamos el set de caracteres
mysqli_set_charset($db, "utf8");

//consultanumeroderegistros
$pr2 = $db->prepare("SELECT count(*) FROM noticiasweb");
//Indicamos los valores pasados por referencia
//$pr2->bind_param("i", $id);
//Ejecutamos la consulta
if($pr2->execute()){
 $pr2->store_result();
 $pr2->bind_result($cantidadnoticias);
 $noticias = array();
$numero=0;
 while($pr2->fetch()){
  
  $noticia = array("total"=>$cantidadnoticias,"respuesta"=>$respuesta);
  $noticias['Noticias'][] = $noticia;

  
 }
}else {
	exit('Error al realizar la consulta: '.$pr2->close());
}


//consultanoticias
$pr = $db->prepare("SELECT id,titulo, noticiacorta, imagenes, fecha FROM noticiasweb WHERE id<=? ORDER BY id DESC LIMIT 4");
$numeromax=(($respuesta-1)*4);

  $id=$cantidadnoticias-$numeromax;
 if ($id<4) {$id=4;
   # code...
 }


//$id = $cantidadnoticias;

//Indicamos los valores pasados por referencia
$pr->bind_param("i", $id);
//Ejecutamos la consulta
if($pr->execute()){
 $pr->store_result();
 $pr->bind_result($id,$titulo,$noticiacorta,$imagenes,$fecha);

$numero=0;
 while($pr->fetch()){
  
  $noticia = array("id"=>$id,"titulo"=>$titulo, "noticiacorta"=>$noticiacorta, "imagenes"=>$imagenes,"fecha"=>$fecha);
  $noticias['Noticias'][] = $noticia;
  
 }}
 else {
	exit('Error al realizar la consulta: '.$pr->close());
}
 

 echo json_encode($noticias);

	
	//Cerramos la conexion
	$pr->close();
  $pr2->close();
	
 




  ?>
