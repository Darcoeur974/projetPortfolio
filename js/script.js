// ----------- SIDEBAR DE GAUCHE ----------- // 
document.getElementById("sidebarGauche_button").addEventListener("click", toggle_sidebar);
document.getElementById("sidebarGauche_fermeture").addEventListener("click", fermeture_sidebar);

function toggle_sidebar() {
    document.getElementById("sidebarGauche_menu").style.width = "100%";
    document.getElementById("sidebarGauche_liste").style.display = "flex";
}

function fermeture_sidebar() {
    document.getElementById("sidebarGauche_menu").style.width = "0";
    document.getElementById("sidebarGauche_liste").style.display = "none";
}

// ----------- SIDEBAR DE DROITE ----------- //
document.getElementById("sidebarDroite_button").addEventListener("click", toggle_contact);
document.getElementById("sidebarDroite_fermeture").addEventListener("click", fermeture_contact);

function toggle_contact() {
    document.getElementById("sidebarDroite_menu").style.width = "100%";
    document.getElementById("sidebarDroite_liste").style.display = "flex";
}

function fermeture_contact() {
    document.getElementById("sidebarDroite_menu").style.width = "0";
    document.getElementById("sidebarDroite_liste").style.display = "none";
}

// ----------- CAROUSEL ----------- //

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

// ----------- FORMULAIRE ----------- //

var regNom = /^[a-zA-ZÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ' ]{3,30}$/;
var regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var regObjet = /^[a-zA-Z0-9ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ. !#$%&'*+/=?^_`{|}~-]{3,50}$/;
var regMessage = /^[a-zA-Z0-9ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ. !#$%&'*+/=?^_`{|}~-]{3,255}$/;

form = document.getElementById("formulaire_contact");
form.addEventListener("submit", verification);

function verification(event) {
    event.preventDefault();

    nom = document.getElementById("nom");
    email = document.getElementById("email");
    objet = document.getElementById("objet");
    message = document.getElementById("message");
    probleme = document.getElementById("probleme_contact");

    regExp(nom, regNom);
    regExp(email, regMail);
    regExp(objet, regObjet);
    regExp(message, regMessage);

    alert("bouh!");
    $.ajax({
            method: "POST",
            url: 'contact.inc.php',
            type: "POST",
            data: {
                nom: $('#nom').val(),
                email: $('#email').val(),
                objet: $('#objet').val(),
                message: $('#message').val()
            },
        })
        .done(function(msg) {
            alert("Data Saved: " + msg);
        });
}




function regExp(item, regExp) {

    if (regExp.test(item.value)) {
        messageClient(item, false);
    } else {
        messageClient(item, true);
    }
}

/**
 * 
 * @param {*} item 
 * @param {*} msgType 
 */

function messageClient(item, msgType) {
    if (msgType) {
        getMsg();
        getMsgArea(item);
        applyStyle(item, "2px solid red");
    } else {
        applyStyle(item, "2px solid green");
    }
}
/**
 * 
 * @param {*} id 
 * @return string 
 */

function getMsg(id) {
    return msg;
}

function getMsgArea(id) {
    if (id === nom) {
        id = "nom_verif";
        zoneTexte = document.getElementById(id);
    }

}

function applyStyle(item, style) {
    item.style.border = style;
}


var msg = [
    "Le champs 'Nom' est invalide",
    "Le champs 'email' est invalide",
    "Le champs 'objet' est invalide",
    "Le champs 'message' est invalide"
];








// ancien model ! //


// function verif_nom() {
//     if (regNom.test(nom)) {
//         document.getElementById("nom_verif").textContent = "";
//         document.getElementById("nom").style.border = "2px solid green";
//         return true;
//     } else {
//         document.getElementById("nom_verif").textContent = "Le champs 'Nom' est invalide";
//         document.getElementById("nom").style.border = "2px solid red";
//         return false;
//     }
// }

// function verif_email() {
//     if (regMail.test(email)) {
//         document.getElementById("email_verif").textContent = "";
//         document.getElementById("email").style.border = "2px solid green";
//         return true;
//     } else {
//         document.getElementById("email_verif").textContent = "Le champs 'email' est invalide";
//         document.getElementById("email").style.border = "2px solid red";
//         return false;
//     }
// }

// function verif_objet() {
//     if (regObjet.test(objet)) {
//         document.getElementById("objet_verif").textContent = "";
//         document.getElementById("objet").style.border = "2px solid green";
//         return true;
//     } else {
//         document.getElementById("objet_verif").textContent = "Le champs 'objet' est invalide";
//         document.getElementById("objet").style.border = "2px solid red";
//         return false;
//     }
// }

// function verif_message() {
//     if (regMessage.test(message)) {
//         document.getElementById("message_verif").textContent = "";
//         document.getElementById("message").style.border = "2px solid green";
//         return true;
//     } else {
//         document.getElementById("message_verif").textContent = "Le champs 'message' est invalide";
//         document.getElementById("message").style.border = "2px solid red";
//         return false;
//     }
// }