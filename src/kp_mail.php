<?php
header('Access-Control-Allow-Origin: *');

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$mail = $data['mail'];
$price = $data['dopiPrice'];
$id = $data['id'];
$atst = $data['atst'];
$full = $data['full'];

$formcontent="От: $name \n\n Почта: $mail \n\n Лаборатория: $id \n\n Доп.услуги сумма: $price \n\n Аттестация: $atst \n\n Общая сумма: $full";
$recipient = "tka4inni@gmail.com";
$subject = "$name скачал коммерческое предложение";

mail($recipient, $subject, $formcontent) or die("Error!");
?>