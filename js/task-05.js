const nameInputLabel = document.querySelector("#name-input");
const nameOutputLabel = document.querySelector("#name-output");

nameInputLabel.addEventListener("input", () => {
  nameOutputLabel.textContent = nameInputLabel.value;
  if (nameInputLabel.value.length === 0) {
    nameOutputLabel.textContent = "Anonimo";
  } else {
    nameOutputLabel.textContent = nameInputLabel.value;
  }
});
