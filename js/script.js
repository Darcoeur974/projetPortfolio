//--------------VARIABLE--------------//
let formulaire = document.getElementById('formulaire'),
    inputsFormulaire = document.querySelectorAll('#formulaire input'),
    email = inputsFormulaire[0],
    nom = inputsFormulaire[1],
    objet = inputsFormulaire[2],
    textearae = document.querySelector('#formulaire textarea'),
    emailRegExp = new RegExp(/^[a-zA-Z0-9._-]{3,}@{1}[a-z]{2,}\.{1}[a-z]{2,4}$/),
    generalRegExp = new RegExp(/^[A-Za-z\s'éèëàâù]{3,}$/),
    texteRegExp = new RegExp(/^([A-Za-z0-9\s'éèëàâù,._-]+)?$/),
    insulteRegExp = new RegExp(/(con(ne)?)((n)?ard)?|put(.)?(s)?|(en)?cul(er)?|batard|biatch|bite|branleur/),
    test = new RegExp(/!|\?/)

//-------------FORMULAIRE--------------//
for (i = 0; i < inputsFormulaire.length; i++) {
    inputsFormulaire[i].onkeydown = function onPress(event) {
        let keyPress = event.key;
        if (keyPress === "Enter") {
            comparaisonEmail(email);
            comparaisonNom(nom);
            comparaisonObjet(objet);
            comparaisonTexte(textearae);

            event.preventDefault();

            if (resultatMail === true && resultatObjet === true && resultatNom === true && resultatTexte == true && resultatInsulte != true) {
                console.log("Document envoyer!");
                console.log("E-mail : " + email.value);
                console.log("Nom / prénom : " + nom.value);
                console.log("Objet : " + objet.value);
                console.log("Texte : " + textearae.value);
                //document.forms["formulaire"].submit();
                RAZ();
            } else {
                alert("Probleme rencontré!");
            }

        }
    }
};

function comparaisonEmail(arg) {
    verif = arg.value;
    resultatMail = emailRegExp.test(verif);
    if (resultatMail != true) {
        if (verif == '') {
            alert("Probleme sur " + arg.name + " : vous n'avez pas remplie le champ");
            ereur(arg);
        } else {
            alert("Probleme sur " + arg.name + " : " + verif + " n\'est pas valide!");
            ereur(arg);
        }
    }
}

function comparaisonNom(arg) {
    verif = arg.value;
    resultatNom = generalRegExp.test(verif);
    if (verif == '') {
        alert("Probleme sur votre " + arg.name + " : vous n'avez pas remplie le champ");
        ereur(arg);
    } else if (resultatNom != true) {
        alert("Probleme sur votre " + arg.name + " : " + verif + " n'est pas valide!");
        ereur(arg);
    }
}

function comparaisonObjet(arg) {
    verif = arg.value;
    resultatObjet = generalRegExp.test(verif);
    if (verif == '') {
        alert("Probleme sur votre " + arg.name + " : vous n'avez pas remplie le champ");
        ereur(arg);
    } else if (resultatObjet != true) {
        alert("Probleme sur votre " + arg.name + " : " + verif + " n'est pas valide!");
        ereur(arg);
    }
}

function comparaisonTexte(arg) {
    verif = arg.value;
    resultatTexte = texteRegExp.test(verif);
    resultatInsulte = insulteRegExp.test(verif);
    if (verif == '') {

    } else {
        if (resultatTexte != true) {
            alert("Probleme sur votre " + arg.name + " : contient des termes inaproprié");
            ereur(arg);
        } else if (resultatInsulte === true) {
            alert("hé petit malin je t'ai vue!")
            ereur(arg);
        }
    }

}

function ereur(arg) {
    arg.style.backgroundColor = "lightcoral";
    arg.style.border = "2px red solid";
}

function RAZ() {
    email.value = "";
    nom.value = "";
    objet.value = "";
    textearae.value = "";
    email.style.backgroundColor = "";
    email.style.border = "";
    nom.style.backgroundColor = "";
    nom.style.border = "";
    objet.style.backgroundColor = "";
    objet.style.border = "";
    textearae.style.backgroundColor = "";
    textearae.style.border = "";
}