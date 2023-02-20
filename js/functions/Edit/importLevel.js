function exportLevel() {
  let input = document.createElement("input");
  input.type = "file";

  input.addEventListener("change", function() {
    let file = input.files[0];
    let reader = new FileReader();

    reader.addEventListener("load", function() {
      // Stocker le contenu du fichier dans le stockage local avec la clé "map"
      localStorage.setItem("map", reader.result);
      alert("Le fichier sélectionné a été stocké localement.");
    });

    reader.readAsText(file);
  });

  input.click();
};