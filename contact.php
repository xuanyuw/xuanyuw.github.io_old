if($_POST["submit"]) {
    $recipient="wuxuanyu86@gmail.com";
    $subject="Message from Website";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Awesome! We are friends now! I'll get back to you as soon as I can!</p>";
}