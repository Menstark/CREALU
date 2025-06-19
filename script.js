
let dossier = {};

function createDossier() {
  dossier = {
    ref: document.getElementById('refChantier').value,
    client: document.getElementById('nomClient').value,
    adresse: document.getElementById('adresse').value,
    pieces: []
  };
  document.getElementById("dossierSection").style.display = "block";
  document.getElementById("dossierTitre").innerText = "Chantier : " + dossier.ref;
}

function ajouterPiece() {
  const nom = prompt("Nom de la pièce ?");
  if (!nom) return;
  const type = prompt("Type de produit (Fenêtre, Volet, Store...) ?");
  const largeur = prompt("Largeur (mm) ?");
  const hauteur = prompt("Hauteur (mm) ?");
  const produit = { nom, type, largeur, hauteur };
  dossier.pieces.push(produit);
  afficherPieces();
}

function afficherPieces() {
  const zone = document.getElementById("listePieces");
  zone.innerHTML = "";
  dossier.pieces.forEach((p, i) => {
    zone.innerHTML += `<div>📍 ${p.nom} - ${p.type} (${p.largeur}x${p.hauteur})</div>`;
  });
}

function finaliser() {
  alert("Fonction export PDF + mail à venir");
}
