<?php
header('Access-Control-Allow-Origin: *');

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['comments'];

$formcontent=" От: Bambi \n\n Сообщение: boom";
// $recipient = "vkirillov.online@yandex.ru";
$recipient = "tka4inni@gmail.com";
$subject = "Контактная форма";
$mailheader = "From: aaa@mail.ru \r\n";

mail($recipient, $subject, $formcontent, $mailheader);

if ( @mail($recipient, $subject, $formcontent, $mailheader) ) {
  	echo 'true';
}
else {
  	echo 'false';
}
?>