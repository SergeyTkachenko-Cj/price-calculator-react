<?php
header('Access-Control-Allow-Origin: *');

$a = $_POST['lab_kb'];
$b = $_POST['basic_price'];
$c = $_POST['basic_name'];
$d = $_POST['dop_name'];
$e = $_POST['dop_price'];
$f = $_POST['price_all'];
$g = $_POST['attest'];
$h = $_POST['rtn'];
$i = $_POST['client'];
$j = $_POST['email'];

$formcontent="$i \n\n $j \n\n $a \n\n $b \n\n $c \n\n $d \n\n $e \n\n $f \n\n $g \n\n $h";
$recipient = "tka4inni@gmail.com";
$subject = "Контактная форма";
$mailheader = "From: 'dick chaney' \r\n";

$content =" От: $name \n\n Лаборатория: $a \n\n Доп.услуги: $d \n\n Аттестация: $g \n\n Общая сумма: $f";
// $towhom = "vkirillov.online@yandex.ru";
$towhom = "tka4inni@gmail.com";
$heading = "$name скачал коммерческое предложение";
$mailhead = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
mail($towhom, $heading, $content, $mailhead) or die("Error!");
?>