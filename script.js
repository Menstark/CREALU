
let chantierData = {};
let verrouille = false;

function demarrerChantier() {
  chantierData = {
    ref: document.getElementById("ref").value,
    adresse: document.getElementById("adresse").value,
    client: document.getElementById("client").value,
    releveur: document.getElementById("releveur").value,
    date: document.getElementById("date").value,
    pieces: []
  };
  localStorage.setItem("chantier", JSON.stringify(chantierData));
  document.getElementById("chantier-init").style.display = "none";
  document.getElementById("chantier-main").style.display = "block";
  document.getElementById("chantier-titre").textContent = "📋 Chantier " + chantierData.ref;
}

function ajouterPiece() {
  if (verrouille) return alert("Formulaire verrouillé après envoi.");
  let nom = prompt("Nom de la pièce ?");
  if (!nom) return;
  chantierData.pieces.push({ nom: nom, produits: [] });
  localStorage.setItem("chantier", JSON.stringify(chantierData));
  afficherPieces();
}

function afficherPieces() {
  const cont = document.getElementById("liste-pieces");
  cont.innerHTML = "";
  chantierData.pieces.forEach((p, i) => {
    let bloc = document.createElement("div");
    bloc.innerHTML = "<strong>" + p.nom + "</strong> <button onclick='ajouterProduit(" + i + ")'>Ajouter produit</button>";
    cont.appendChild(bloc);
  });
}

function ajouterProduit(i) {
  if (verrouille) return;
  let type = prompt("Type de produit (fenêtre, volet...)");
  if (!type) return;
  chantierData.pieces[i].produits.push({ type: type });
  localStorage.setItem("chantier", JSON.stringify(chantierData));
  afficherPieces();
}

function genererPDF() {
  alert("📄 PDF simulé généré (fonction réelle à intégrer)");
}

function envoyerFormulaire() {
  alert("📤 Données envoyées à alexandre@crealu.com (simulation)");
  verrouille = true;
  localStorage.removeItem("chantier");
}

function resetSignature() {
  const canvas = document.getElementById("signature");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
