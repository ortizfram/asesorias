const FORM_URL = "https://forms.gle/PEGA_AQUI_TU_FORMULARIO";

const primaryButtons = [
  document.getElementById("formButton"),
  document.getElementById("formButtonSecondary"),
];

for (const button of primaryButtons) {
  button.href = FORM_URL;
}

if (FORM_URL.includes("PEGA_AQUI_TU_FORMULARIO")) {
  primaryButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Pegá aquí la URL real de tu Google Form en app.js para activar el botón.");
    });
  });
}
