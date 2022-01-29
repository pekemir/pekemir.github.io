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
$pr2 = $db->prepare("SELECT count(*) FROM noticiasweb");
//Indicamos los valores pasados por referencia
//$pr2->bind_param("i", $id);
//Ejecutamos la consulta
if($pr2->execute()){
 $pr2->store_result();
 $pr2->bind_result($cantidadnoticias);
 $noticias = array();

 while($pr2->fetch()){
  
  $noticia = array("total"=>$cantidadnoticias,"respuesta"=>$respuesta);
  $noticias['Noticias'][] = $noticia;

  
 }
}else {
	exit('Error al realizar la consulta: '.$pr2->close());
}


//consultanoticias
$pr = $db->prepare("SELECT id,titulo, noticiaentera, imagenes, fecha FROM noticiasweb WHERE id<=? ORDER BY id DESC LIMIT 4");
if ($respuesta>0) {
  $numeromax=(($respuesta-1)*4);

  $id=$cantidadnoticias-$numeromax;
 if ($id<4) {$id=4; }
} 
else {
  switch ($respuesta) {
    case 'ultimo':
      $id=$cantidadnoticias-4;
      break;
      case 'primero':
        $id=4;
        break;
    default:
      $id=4;
      break;  } }
//Indicamos los valores pasados por referencia
$pr->bind_param("i", $id);
//Ejecutamos la consulta
if($pr->execute()){
 $pr->store_result();
 $pr->bind_result($id,$titulo,$noticiaentera,$imagenes,$fecha);

$numero=0;
 while($pr->fetch()){
  
  $noticia = array("id"=>$id,"titulo"=>$titulo, "noticiaentera"=>$noticiaentera, "imagenes"=>$imagenes,"fecha"=>$fecha);
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
