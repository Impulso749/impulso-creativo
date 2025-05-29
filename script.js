function mostraMessaggio() {
  const paragrafo = document.getElementById("messaggio");
  paragrafo.textContent = "Benvenuto su Impulso Creativo!";
}

function login() {
  const utente = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  const messaggio = document.getElementById("loginResult");

  if (utente === "socio" && password === "1234") {
    messaggio.textContent = "Accesso effettuato con successo!";
    messaggio.style.color = "green";
  } else {
    messaggio.textContent = "Credenziali non valide.";
    messaggio.style.color = "red";
  }
}

function inviaMessaggio(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const testo = document.getElementById("messaggio").value;
  const conferma = document.getElementById("confermaInvio");

  if (nome && email && testo) {
    conferma.textContent = "Messaggio inviato! Ti risponderemo al più presto.";
    conferma.style.color = "green";
    document.querySelector("form").reset();
  } else {
    conferma.textContent = "Compila tutti i campi!";
    conferma.style.color = "red";
  }
}
