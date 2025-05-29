// Funzione per caricare e mostrare immagini da una cartella
function caricaImmagini(cartella, contenitoreId, immagini) {
  const contenitore = document.getElementById(contenitoreId);
  immagini.forEach(nomeFile => {
    const img = document.createElement('img');
    img.src = `${cartella}/${nomeFile}`;
    img.alt = nomeFile;
    contenitore.appendChild(img);
  });
}

// ESEMPIO DI USO:
// - crea un <div id="galleriaEventi"> nel tuo HTML
// - poi in eventi.html chiama:
// caricaImmagini("eventi_foto", "galleriaEventi", ["2023-01-10.jpg", "2023-04-20.jpg"]);

// - crea un <div id="galleriaSale"> nel tuo HTML
// - poi in sale.html chiama:
// caricaImmagini("sale_foto", "galleriaSale", ["sala1.jpg", "sala2.jpg"]);
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
