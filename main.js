const trombis = document.querySelectorAll(".trombi");

// Contenu du fichier
let content = "";


// Boucler à travers chaque élément div et extraire la chaîne de caractères dans l'attribut "src" de l'élément image
trombis.forEach((trombi) => {
    const img = trombi.querySelector("img");
    const src = img.getAttribute("src");
    const numMail = src.split('=')[1]
    const completeMail = '@webmail.univ-corse.fr\n';

    content += numMail+completeMail;
});

// Créer un nouveau Blob avec le contenu
const blob = new Blob([content], { type: "text/plain" });

// Créer un objet URL pour le blob
const url = window.URL.createObjectURL(blob);

// Créer un lien pour télécharger le fichier
const link = document.createElement("a");
link.href = url;
link.download = "mail.txt";

// Ajouter le lien au document
document.body.appendChild(link);

// Cliquer sur le lien pour télécharger le fichier
link.click();

// Nettoyer l'objet URL et le lien du document
window.URL.revokeObjectURL(url);
document.body.removeChild(link);
