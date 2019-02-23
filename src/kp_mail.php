<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
header('Pragma: public');
header('Access-Control-Allow-Origin: *');

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$mail = $data['mail'];
$price = $data['dopiPrice'];
$id = $data['lab'];
$atst = $data['atst'];
$full = $data['full'];

$subject = 'Коммерческое предложение';
$message = "От: $name\n<br />\n<br />Почта: $mail\n<br />\n<br />Лаборатория: $id\n<br />\n<br />Доп.услуги сумма: $price\n<br />\n<br />Аттестация: $atst\n<br />\n<br />Общая сумма: $full";
$html = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>'.$message.'</body></html>';

//Load Composer's autoloader
require 'mailer/vendor/autoload.php';
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.com';                        // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'argus@argus.group';                 // SMTP username
    $mail->Password = 'plSYrr4r';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->From='argus@argus.group';
    $mail->FromName='Скачали коммерческое предложение';
    $mail->addAddress("tka4inni@gmail.com", "АРГУС");     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?=";
    $mail->Body    = $html;
    $mail->AltBody = $message;
    $mail->send();
    $return = true;
    echo json_encode($return);
    } 
    catch (Exception $e) {
    $return = false;
    echo json_encode($return);
}
?>