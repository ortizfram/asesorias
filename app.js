const FORM_URL =
  "https://docs.google.com/forms/d/1daDeZYk-rYu-DAzmjiGUKEfOtxFbtxsWb4FsiIH77SA/viewform";

const primaryButtons = [
  document.getElementById("formButton"),
  document.getElementById("formButtonSecondary"),
];

for (const button of primaryButtons) {
  button.href = FORM_URL;
}
