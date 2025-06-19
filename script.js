
function ajouterPiece() {
  const container = document.getElementById('piecesContainer');
  const div = document.createElement('div');
  div.innerHTML = `
    <h3>Nouvelle Pièce</h3>
    <label>Nom de la pièce : <input type="text" name="piece[]" required></label>
    <label>Type de produit : 
      <select name="produit[]">
        <option value="fenetre">Fenêtre</option>
        <option value="volet">Volet roulant</option>
        <option value="store">Store banne</option>
        <option value="moustiquaire">Moustiquaire</option>
      </select>
    </label>
    <label>Largeur (mm) : <input type="number" name="largeur[]" required></label>
    <label>Hauteur (mm) : <input type="number" name="hauteur[]" required></label>
    <label>Photo (obligatoire) : <input type="file" name="photo[]" accept="image/*" required></label>
  `;
  container.appendChild(div);
}
    