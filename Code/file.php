<?php 
$name = $_POST['name'];
$message = $_POST['message'];
$email = $_POST['email'];

$filename = $_POST['filename'];

  $mensaje = "NOMBRE: ".$_POST['name']."\t\t"."CORREO: ".$_POST['email']."\r\n\r\n"."MENSAJE: \r\n".$_POST['message'];
  file_put_contents($filename, $mensaje, FILE_APPEND);
  ?>