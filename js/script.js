/*
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
*/
// ----------- FORMULAIRE ----------- //

var RegExp = new RegExp('^[A-Za-z]/w$');

form = document.getElementById("formulaire_contact");
form.addEventListener("submit", verification);

nom = document.getElementById("nom");
email = document.getElementById("email");
objet = document.getElementById("objet");
message = document.getElementById("message");
probleme = document.getElementById("probleme_contact");

function verification(event) {
    event.preventDefault();
    if (nom.value === "") {
        document.getElementById("nom_verif").textContent = "Le champs est obligatoire";
    }
    if (nom.value === "") {
        document.getElementById("nom_verif").textContent = "Le champs est obligatoire";
    }
    if (email.value === "") {
        document.getElementById("email_verif").textContent = "Le champs est obligatoire";
    }
    if (objet.value === "") {
        document.getElementById("objet_verif").textContent = "Le champs est obligatoire";
    }
    if (message.value === "") {
        document.getElementById("message_verif").textContent = "Le champs est obligatoire";
    }
}