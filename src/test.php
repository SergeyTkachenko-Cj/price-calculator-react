<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
header('Pragma: public'); // required
   header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
   header("Cache-Control: no-store, no-cache, must-revalidate");
setlocale(LC_ALL, "ru_RU.UTF8", "ru_RU.UTF-8", "ru_RU.utf8", "ru_RU.utf-8");
setlocale(LC_NUMERIC, 'C');
mb_internal_encoding('utf-8');
$db=@mysqli_connect('151.248.115.183','vh66872_arguseko','z0snwj3h','vh66872_argusdb');
mysqli_query($db,'SET NAMES utf8 COLLATE \'utf8_general_ci\';');
mysqli_query($db,'SET character_set_client = utf8;');
mysqli_query($db,'SET CHARACTER_SET_RESULTS=utf8;');
mysqli_query($db,'SET sql_mode = "";');
mysqli_query($db,'SET group_concat_max_len = 4294967295;');
mysqli_query($db,'insert into rl_debug (cvalue,cerror,ddate,naff,ncount,cinfo,nrow) values (\''.mysqli_escape_string($db,'POST='.print_r($_POST,1)).'\',null,now(),null,null,\''.mysqli_escape_string($db,'kirillov.online').'\',null);');
if (!$db) $dber=mysqli_connect_error();
$a=mysqli_fetch_row(mysqli_query($db,'SELECT cfile, ccontent, coalesce(ccontent_mime,\'application/force-download\'),ccontent_size,ccontent_ext FROM rl_templates where id=1387 and nid is null'));//1385 - docx, 1387 - pdf
if ($a[2]!='text/html')
{$file = tempnam('tmp/', 'zip');
 $f=fopen($file,'w');
 fwrite($f, $a[1]);
 fclose($f);
 $zip = new ZipArchive;
 }
if (($a[2]=='text/html')or($zip->open($file) === TRUE))
{if ($a[2]=='application/vnd.openxmlformats-officedocument.wordprocessingml.document') $c=$zip->getFromName('word/document.xml');
 else if ($a[2]=='application/vnd.oasis.opendocument.text') $c=$zip->getFromName('content.xml');
 else if ($a[2]=='text/html') $c=$a[1];
 foreach ($_POST as $i => $v) $_POST[$i]=str_replace('&nbsp;',' ', $_POST[$i]);
 $content=1;
 $basic_name=implode($a[2]=='text/html'?'<br>':'</w:t><w:br/><w:t>', json_decode($_POST['basic_name']));
 $dop_name=implode($a[2]=='text/html'?'<br>':'</w:t><w:br/><w:t>', json_decode($_POST['dop_name']));

 $rp=array(
  '[client]'=>$_POST['client'],
  '[dop_head]' => $_POST['dop_head'],
  '[lab_kb]'=>$_POST['lab_kb'],
  '[basic_price]'=>$_POST['basic_price'],
  '[basic_name]'=>$basic_name,
  '[dop_price]'=>$_POST['dop_price'],
  '[dop_name]'=>$dop_name,
  '[attest]'=>$_POST['attest'],
  '[price_all]'=>$_POST['price_all'],
  '[rtn]'=>$_POST['rtn'],
  '[email]'=>$_POST['email'],
  '[\'client\']'=>$_POST['client'],
  '[\'dop_head\']' =>$_POST['dop_head'],
  '[\'lab_kb\']'=>$_POST['lab_kb'],
  '[\'basic_price\']'=>$_POST['basic_price'],
  '[\'basic_name\']'=>$basic_name,
  '[\'dop_price\']'=>$_POST['dop_price'],
  '[\'dop_name\']'=>$dop_name,
  '[\'attest\']'=>$_POST['attest'],
  '[\'price_all\']'=>$_POST['price_all'],
  '[\'rtn\']'=>$_POST['rtn'],
  '[\'email\']'=>$_POST['email'],
  '[&apos;client&apos;]'=>$_POST['client'],
  '[&apos;dop_head&apos;]' =>$_POST['dop_head'],
  '[&apos;lab_kb&apos;]'=>$_POST['lab_kb'],
  '[&apos;basic_price&apos;]'=>$_POST['basic_price'],
  '[&apos;basic_name&apos;]'=>$basic_name,
  '[&apos;dop_price&apos;]'=>$_POST['dop_price'],
  '[&apos;dop_name&apos;]'=>$dop_name,
  '[&apos;attest&apos;]'=>$_POST['attest'],
  '[&apos;price_all&apos;]'=>$_POST['price_all'],
  '[&apos;rtn&apos;]'=>$_POST['rtn'],
  '[&apos;email&apos;]'=>$_POST['email'],
  );
 $c=str_replace(array_keys($rp),$rp,$c);
 $a[0] = str_replace(array_merge(array_map('chr', range(0,31)),array('<', '>', ':', '"', '&quot;', '/', '\\', '|', '?', '*')), '', htmlspecialchars_decode(str_replace(array_keys($rp),$rp,($_GET['fn']?$_GET['fn'].'.'.$a[4]:$a[0]))));

 if ($a[2]=='application/vnd.openxmlformats-officedocument.wordprocessingml.document') {$zip->addFromString('word/document.xml',$c);}
 else if ($a[2]=='application/vnd.oasis.opendocument.text') {$zip->addFromString('content.xml',$c);}

 if (($a[2]=='application/vnd.openxmlformats-officedocument.wordprocessingml.document')or($a[2]=='application/vnd.oasis.opendocument.text'))
 {$zip->close();
  if (isset($content)) $content=file_get_contents($file);
  else
  {if(ini_get('zlib.output_compression')) ini_set('zlib.output_compression', 'Off');
   header('Content-Description: File Transfer');
   header('Pragma: public'); // required
   header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past
   header("Cache-Control: no-store, no-cache, must-revalidate");
   //header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
   //header('Cache-Control: private',false); // required for certain browsers
   //header('Content-Type: '.$a[2].'; charset=utf-8');
   header('Content-Description: File Transfer');
   header('Content-Type: '.$a[2].'; charset=utf-8');
   header('Content-Disposition: attachment; filename="'.$a[0].'";' );
   header('Content-Transfer-Encoding: binary');
   header('Content-Length: '.filesize($file));
   ob_clean();
   flush();
   readfile($file);
   }
  unlink($file);
  }
 else if ($a[2]=='text/html')
 {
  require_once 'mpdf/vendor/autoload.php';
  $mpdf = new \Mpdf\Mpdf(['tempDir' => 'tmp']); //__DIR__ . '/../tmp'
  $mpdf->WriteHTML($c);
  if (isset($content)) $content=$mpdf->Output($a[0],'S');
  else $mpdf->Output($a[0],'D');
  }
 }
// print_r($_POST);
// print_r($m);

// POST=Array
// (
//     [user_sirname] => addad d . ad dad
//     [user_mail] => tka4inni@gmail.com
//     [lab_kb] => 1 кВ
//     [basic_price] => 85000
//     [basic_name] => ["Проверка соответствия смонтированной электро­установки требованиям нормативно‐технической документации (визуальный осмотр)","Проверка цепи между заземлителями и заземляемыми элементами; проверка наличия цепи между заземлёнными установками и элементами заземлённой установки","Измерения сопротивления изоляции электрических аппаратов‚ вторичных цепей и электро­проводки напряжением до 1 кВ","Измерение сопротивления заземляющих устройств","Измерение удельного сопротивления грунта","Проверка цепи фаза‐нуль в электро­установках до 1 кВ с системой TN","Проверка срабатывания защиты при системе питания с заземлённой и изолированной нейтралью","Проверка действия расцепителей автомати­ческих выключателей","Испытание (проверка) устройств защитного отключения (УЗО)","Испытание устройств АВР","Проверка фазировки РУ напряжением до 1 кВ и их присоединений","Испытание силовых кабельных линий напряжением до 1 кВ"]
//     [dop_name] => ["Измерение сопротивления (проводимости) полов и стен (5000 p)","Проверка работы автоматических выключателей и контакторов при пониженном и номинальном напряжениях оперативного тока (1000 p)"]
//     [dop_price] => 6000
//     [price_all] => 115780
//     [attest] => 0
//     [rtn] => 24780
//     [client] => addad d . ad dad
//     [email] => tka4inni@gmail.com
// )



//$formcontent="$i \n\n $j \n\n $a \n\n $b \n\n $c \n\n $d \n\n $e \n\n $f \n\n $g \n\n $h";
//$recipient = $_POST['email'];//"tka4inni@gmail.com";
// $subject = 'Коммерческое предложение';
// $mailheader = "From: 'Владимир Кириллов' \r\n";
//vkirillov.online@yandex.ru   CZg9Mt

// mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

// $content =" От: $name \n\n Лаборатория: $a \n\n Доп.услуги: $d \n\n Аттестация: $g \n\n Общая сумма: $f";
// $towhom = "tka4inni@gmail.com";
// $heading = "$name скачал коммерческое предложение";
// $mailhead = "From: $email \r\n";

// mail($towhom, $heading, $content, $mailhead) or die("Error!");

if ($content)
{   
  // $mailto = $_POST['email'];
    $subject = 'Коммерческое предложение';
    $message = "Уважаемый {$_POST['client']}. Высылаем Вам коммерческое предложение по регистрации электорлаборатории (в приложении этого письма) и надеемся на долгосрочное сотрудничество. Наш email: vkirillov.online@yandex.ru и телефон: 8-499-390-36-26. Обращайтесь по любым вопросам.";
    $html = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>'.$message.'</body></html>';
 //    // $content = $content;// file_get_contents($file);
 //    $subject='=?UTF-8?B?'.base64_encode($subject).'?=';
 //    $message=chunk_split(base64_encode($message));
 //    $content = chunk_split(base64_encode($content));
 //    $a[0]='=?UTF-8?B?'.base64_encode($a[0]).'?=';

 //    // a random hash will be necessary to send mixed content
 //    $separator = md5(time());

 //    // carriage return type (RFC)
 //    $eol = "\r\n";

 //    // main header (multipart mandatory)
 //    $headers = 'From: Владимир Кириллов <noreply@kirillov.online>' . $eol;
 //    $headers .= 'MIME-Version: 1.0' . $eol;
 //    $headers .= 'Content-Type: multipart/mixed; boundary="' . $separator . '"' . $eol;
 //    // $headers .= 'Content-Transfer-Encoding: 7bit' . $eol;
 //    // $headers .= 'This is a MIME encoded message.' . $eol;

 //    // message
 //    $body = '--' . $separator . $eol;
 //    $body .= 'Content-Type: text/plain; charset="UTF-8"' . $eol;
 //    $body .= 'Content-Transfer-Encoding: base64' . $eol;
 //    $body .= $message . $eol;

 //    // message
 //    $body = '--' . $separator . $eol;
 //    $body .= 'Content-Type: text/html; charset="UTF-8"' . $eol;
 //    $body .= 'Content-Transfer-Encoding: base64' . $eol;
 //    $body .= $message . $eol;

 //    // attachment
 //    $body .= '--' . $separator . $eol;
 //    $body .= 'Content-Type: '.$a[2].'; name="' . $a[0] . '"' . $eol;
 //    $body .= 'Content-Disposition: attachment; filename="' . $a[0] . '"' . $eol;
 //    $body .= 'Content-Transfer-Encoding: base64' . $eol;
 //    $body .= $content . $eol;
 //    $body .= '--' . $separator . '--';

 //    //SEND Mail
 //    if (mail($mailto, $subject, $body, $headers)) echo '<script>window.close();</script>';
  // else
  // {echo 'Письмо не послано...';
 //     print_r( error_get_last() );
 //     }


//Load Composer's autoloader
require 'mailer/vendor/autoload.php';
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    //$mail->SMTPDebug = 1;                                 // Enable verbose debug output
    // global $dbg;
    // $dbg = '';
    // $mail->Debugoutput = function($str, $l) {global $dbg; $dbg .= $l.': '.$str.'\n';};
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'vkirillov.online@yandex.ru';                 // SMTP username
    $mail->Password = 'CZg9Mt';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->From='vkirillov.online@yandex.ru';
    $mail->FromName='Владимир Кириллов';
    $mail->addAddress($_POST['email'], $_POST['client']);     // Add a recipient

    //Attachments
    $mail->addStringAttachment($content,$a[0],'base64',$a[2].';  charset=utf-8');         // Add attachments
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    // $mail->Subject = $subject;
    $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?=";
    // $mail->Subject = html_entity_decode($subject);
    $mail->Body    = $html;
    $mail->AltBody = $message;
    $mail->send();
    $return = true;
    // echo '<script>window.close();</script>';
    echo json_encode($return);
} catch (Exception $e) {
    $return = false;
    echo json_encode($return);
    // echo 'Письмо не послано... Ошибки: ', $mail->ErrorInfo;
    // else $errors[]='Невозможно отправить счёт №'.$id.' по причинам SMTP: '.$dbg;
}
 }
?>