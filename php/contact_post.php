<?php
    $erreur = [];

    if(!isset($_POST['nom']) OR $_POST['nom'] == ''){
        $erreur['nom'] = "Vous n'avez pas renseigner votre Nom.";
    }
    if(!isset($_POST['email']) OR $_POST['email'] == ''){
        $erreur['email'] = "Vous n'avez pas renseigner votre E-mail.";
    }
    if(!isset($_POST['objet']) OR $_POST['objet'] == ''){
        $erreur['objet'] = "Vous n'avez pas renseigner L'Objet.";
    }
    if(!isset($_POST['message']) OR $_POST['message'] == ''){
        $erreur['message'] = "Vous n'avez pas renseigner le Message.";
    }

    if(!empty($erreur)){
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
        header('Location: ../index.php?mailenvoyer');
    }
    var_dump($erreur);
    die();
    

?>