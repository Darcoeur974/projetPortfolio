<?php
echo $_POST['nom'];
echo $_POST['email'];
echo $_POST['objet'];
echo $_POST['message'];

    $erreur = [];

    if(array_key_exists('nom', $_POST) OR $_POST['nom'] == ''){
        $erreur['nom'] = "Vous n'avez pas renseigner votre Nom.";
    }
    if(array_key_exists('email', $_POST) OR $_POST['email'] == ''){
        $erreur['email'] = "Vous n'avez pas renseigner votre E-mail.";
    }
    if(array_key_exists('objet', $_POST) OR $_POST['objet'] == ''){
        $erreur['objet'] = "Vous n'avez pas renseigner L'Objet.";
    }
    if(array_key_exists('message', $_POST) OR $_POST['message'] == ''){
        $erreur['message'] = "Vous n'avez pas renseigner le Message.";
    }

    if(!empty($erreur)){
        session_start();
        $_SESSION['erreur'] = $erreur;
        header('Location: contact.php');
    }
    else{
        $destinataire = "oconnormorgan974@gmail.com";
        $headers = "From :".$_POST['email'];
        $message = $_POST['message'];
        $nom = $_POST['nom'];
        $mail = $_POST['email'];
        
        mail($destinataire, "... De mon portfolio ...", $message, $headers);
    }
    var_dump($erreur);
    die();
    

?>