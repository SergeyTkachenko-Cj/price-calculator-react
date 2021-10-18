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

if (!$db) $dber=mysqli_connect_error();
$a=mysqli_fetch_row(mysqli_query($db,'SELECT cfile, ccontent, coalesce(ccontent_mime,\'application/force-download\'),ccontent_size,ccontent_ext FROM rl_templates where id=2075 and nid is null')); //2075 - docx, 2073 - pdf
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
 $content=1;


function clear_all($s)
{global $a;
 if($a[2]=='text/html')
 {return $s;
  }
 else
 {
  $s=str_replace(array('&nbsp;'),' ',$s);
  return (str_replace(array('<br>','<br />','<br/>'),'</w:t><w:br/><w:t></w:t><w:br/><w:t>',$s));
  }
 }

// -------------- NEW DATA --------------------------------

 $data = json_decode(file_get_contents("php://input"), true);

foreach ($data as $i => $v) {
    $data[$i]=str_replace('&nbsp;',' ', $data[$i]);
    $data[$i]=str_replace('&hyphen;','-', $data[$i]);
    $data[$i]=str_replace('&shy;','', $data[$i]);
}
 $name = clear_all($data['name']);
 $eMail = clear_all($data['mail']);
 $lab = clear_all($data['lab']);
 $base = clear_all($data['base']);
 $basePrice = clear_all($data['basePrice']);
 $dopi = clear_all($data['dopi']);
 $dopPrice = clear_all($data['dopiPrice']);
 $dopHead = clear_all($data['dopiHead']);
 $dopNoItem = clear_all($data['dopNoItems']);
 $full = clear_all($data['full']);
 $manager = clear_all($data['manager']);

// -----------------------------------------------------------

$rp=array(
  '[client]'=>$name,
  '[dop_head]' => $dopHead,
  '[dop_no]' => $dopNoItem,
  '[lab_kb]'=>$lab,
  '[basic_price]'=>$basePrice,
  '[basic_name]'=>$base,
  '[dop_price]'=>$dopPrice,
  '[dop_name]'=>$dopi,
  '[price_all]'=>$full,
  '[email]'=>$eMail,
  '[\'client\']'=>$name,
  '[\'dop_head\']' => $dopHead,
  '[\'dop_no\']' => $dopNoItem,
  '[\'lab_kb\']'=>$lab,
  '[\'basic_price\']'=>$basePrice,
  '[\'basic_name\']'=>$base,
  '[\'dop_price\']'=>$dopPrice,
  '[\'dop_name\']'=>$dopi,
  '[\'price_all\']'=>$full,
  '[\'email\']'=>$eMail,
  '[&apos;client&apos;]'=>$name,
  '[&apos;dop_head&apos;]' => $dopHead,
  '[&apos;dop_no&apos;]' => $dopNoItem,
  '[&apos;lab_kb&apos;]'=>$lab,
  '[&apos;basic_price&apos;]'=>$basePrice,
  '[&apos;basic_name&apos;]'=>$base,
  '[&apos;dop_price&apos;]'=>$dopPrice,
  '[&apos;dop_name&apos;]'=>$dopi,
  '[&apos;price_all&apos;]'=>$full,
  '[&apos;email&apos;]'=>$eMail,
  );

 $c=str_replace(array_keys($rp),$rp,$c);
 $a[0] = str_replace(array_merge(array_map('chr', range(0,31)),array('<', '>', ':', '"', '&quot;', '/', "'", '\\', '|', '?', '*')), '', htmlspecialchars_decode(str_replace(array_keys($rp),$rp,($_GET['fn']?$_GET['fn'].'.'.$a[4]:$a[0]))));

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
  $mpdf = new \Mpdf\Mpdf(['tempDir' => 'tmp']);      //__DIR__ . '/../tmp'
  $mpdf->WriteHTML($c);
  if (isset($content)) $content=$mpdf->Output($a[0],'S');
  else $mpdf->Output($a[0],'D');
  }
 }

if ($content)
{   
    $subject = 'Коммерческое предложение';
    $message = "От: $name\n<br />\n<br />Почта: $eMail\n<br />\n<br />Лаборатория: $lab\n<br />\n<br />Доп.услуги сумма: $dopPrice\n<br />\n<br />Общая сумма: $full";
    $html = '<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>'.$message.'<br/></body></html>';

//Load Composer's autoloader
require 'mailer/vendor/autoload.php';
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.com';                      // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'argus@argus.group';                // SMTP username
    $mail->Password = 'ARkeyf20';                         // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->From='argus@argus.group';
    $mail->FromName='Группа компаний АРГУС';
    $mail->addAddress($manager, $data['name']);           // Add a recipient

    //Attachments
    $mail->addStringAttachment($content,$a[0],'base64',$a[2].';  charset=utf-8');         // Add attachments
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "=?UTF-8?B?".base64_encode($subject)."?=";
    $mail->Body    = $html;
    $mail->AltBody = $message;
    $mail->send();
    $return = true;
    echo json_encode($return);
} catch (Exception $e) {
    $return = false;
    echo json_encode($return);
}
}
?>