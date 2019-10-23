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