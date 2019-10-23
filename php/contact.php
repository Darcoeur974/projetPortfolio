<?php
session_start();
include 'head.inc.php'
?>
<div class="retour">
    <button> <a href="../index.php">Retour</a></button>
</div>
<div class="block_formulaire">
    <div class="container">
        <form action="contact_post.php" method="post" id="formulaire_contact">
            <h1 class="contact_titre">Formulaire de contact</h1>

            <div id="probleme_contact">

                <?php if(array_key_exists('erreur', $_SESSION)): ?>
                <div class="alert alert-danger">
                    <?= implode('<br>', $_SESSION['erreur']); ?> 
                </div>
                <?php unset($_SESSION['erreur']); endif; ?>

            </div>

            <div class="row">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom">
            </div>
            <div class="row">
                <label for="email">Courriel :</label>
                <input type="text" id="email" name="email">
            </div>
            <div class="row">
                <label for="objet">Objet :</label>
                <input type="text" id="objet" name="objet">
            </div>
            <div class="row">
                <label for="message">Message :</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <input type="submit" name="submit" value="Envoyer" id="bouton_contact">
        </form>
    </div>
</div>