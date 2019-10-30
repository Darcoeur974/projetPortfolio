<div class="block_formulaire">
    <div class="container">
        <form action="" method="post" id="formulaire_contact">
            <h1 class="contact_titre">Formulaire de contact</h1>

            <div id="probleme_contact">
                <small id="nom_verif"></small><br>
                <small id="email_verif"></small><br>
                <small id="objet_verif"></small><br>
                <small id="message_verif"></small><br>
            </div>

            <div class="row">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom">
            </div>
            <div class="row">
                <label for="email">Courriel :</label>
                <input type="mail" id="email" name="email">
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