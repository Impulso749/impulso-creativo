
// Funzione per caricare e mostrare immagini da una cartella
function caricaImmagini(cartella, contenitoreId, immagini) {
  const contenitore = document.getElementById(contenitoreId);
  immagini.forEach(nomeFile => {
    const img = document.createElement('img');
    img.src = `${cartella}/${nomeFile}`;
    img.alt = nomeFile;
    img.classList.add("img-anteprima"); // Aggiunta classe per l'anteprima
    contenitore.appendChild(img);
  });
}

// LIGHTBOX: clic su immagine per ingrandirla
document.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && e.target.closest(".galleria")) {
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    
    const img = document.createElement("img");
    img.src = e.target.src;
    img.alt = e.target.alt;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function () {
      document.body.removeChild(overlay);
    });
  }
});
