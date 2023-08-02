<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once 'PHPMailer-master/src/Exception.php';
require_once 'PHPMailer-master/src/PHPMailer.php';
require_once 'PHPMailer-master/src/SMTP.php';

$mail -> isHTML(true);

$mail = new PHPMailer(true)

$mail-> isSMTP();

$mail -> Host = 'smtp.gmail.com';

$mail -> SMTPAuth = 'true';

$mail -> SMTPSecure = 'tls'

$mail -> Port = '587';

$mail -> Username = 'jaharicraw11@gmail.com';


$mail -> Password = 'nyxjonsnucgsahkq';

$mail -> Subject = 'Test';

$mail ->setFrom("jaharicraw11@gmail.com");

$mail -> Body = "This is plain text";

$mail -> addAddress = ("jaharicraw11@gmail.com");

 
if ($mail -> Send()) {
echo "Email Sent"
} else {
    echo "Error.!"
}

$mail -> smtpClose();
?>