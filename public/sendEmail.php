<?php

if(isset($_POST['email'])) {
 
  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "hello@calabashvillabequia.com";
  $email_subject = "New Enquiry";

  function died($error) {
      // your error code can go here
      echo "We are very sorry, but there were error(s) found with the form you submitted. ";
      echo "These errors appear below.<br /><br />";
      echo $error."<br /><br />";
      echo "Please go back and fix these errors.<br /><br />";
      die();
  }
 
 
  
 
     
  
  $fullName = $_POST['fullName']; // required
  $email = $_POST['email']; // required
  $arrivalDate = $_POST['arrivalDate']; // required
  $departureDate = $_POST['departureDate']; // required
  $message = $_POST['message'];

  $error_message = "";
  
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  $string_exp = "/^[A-Za-z .'-]+$/";
  $phoneNum_exp = "/^[0-9]{0,15}$/";
  $houseNum_exp = "/^[0-9]{0,15}$/";
  if(!preg_match($string_exp,$fullName)) {
    $error_message .= 'The last name you entered does not appear to be valid.<br />';
  }

  if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

  
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
  $email_message = "Form details below.\n\n";
 
  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }
 
  
  
  $email_message .= "Full Name: ".clean_string($fullName)."\n";
  $email_message .= "Email: ".clean_string($email)."\n";
  $email_message .= "Arrival Date: ".clean_string($arrivalDate)."\n";
  $email_message .= "Departure Date: ".clean_string($departureDate)."\n";
  $email_message .= "Message: ".clean_string($message)."\n";
 
// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();
$success = @mail($email_to, $email_subject, $email_message, $headers);  

}
if($success){
  echo "Message Sent";
}

?>