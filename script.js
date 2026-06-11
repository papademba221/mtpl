function genererTable() {
  const nombre = document.getElementById("nombre").value;
  const resultat = document.getElementById("resultat");

  resultat.innerHTML = "";

  if (nombre === "") {
    resultat.innerHTML = "Veuillez entrer un nombre.";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    resultat.innerHTML += `
      <p>${nombre} × ${i} = ${nombre * i}</p>
    `;
  }
}