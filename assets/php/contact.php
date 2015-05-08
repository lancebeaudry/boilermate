<?
$name = $_REQUEST["name"];
$email = $_REQUEST["email"];
$pic = $_REQUEST["pic"];
$to    = "youremail@email.com"; /* <= Change this Email ID to yours */
if (isset($email)) {
    $subject = "$email wants to be notified of Lockaware's launch"; /* <= Change the Subject If you want */
		$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= "From: ".$name." <".$name.">\r\n"."Reply-To: ".$email."\r\n" ;
$msg     = "From: $name<br/>Email: $email";
	
   $mail =  mail($to, $subject, $msg, $headers);
  if($mail)
	{
		echo 'sent';
	}

else
	{
		echo 'failed';
	}
}

?>