
function newProject() {
  const name = prompt("Nom du dossier chantier ?");
  if (name) {
    const project = document.createElement("div");
    project.textContent = "📁 " + name + " (cliquez pour ouvrir)";
    project.style.cursor = "pointer";
    project.style.padding = "8px";
    project.style.border = "1px solid #ccc";
    project.style.marginBottom = "10px";
    document.getElementById("projects").appendChild(project);
  }
}
