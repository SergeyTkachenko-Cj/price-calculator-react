<?php
header('Access-Control-Allow-Origin: *');

$name = $_POST['client'];
$email = $_POST['email'];
$a = $_POST['lab_kb'];
$b = $_POST['dop_name'];
$c = $_POST['dop_price'];
$d = $_POST['price_all'];
$e = $_POST['attest'];

$formcontent="От: $name \n\n Почта: $email \n\n Лаборатория: $a \n\n Доп.услуги сумма: $c \n\n Аттестация: $e \n\n Общая сумма: $d";
$recipient = "vkirillov.online@yandex.ru";
// $recipient = "tka4inni@gmail.com";
$subject = "$name скачал коммерческое предложение";
// $mailheader = "From: $email \r\n";
$mailheader = 'From: <tka4inni@gmail.com>' . "\r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>