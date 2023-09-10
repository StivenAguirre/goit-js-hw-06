const input = document.querySelector("input");

input.addEventListener("blur", () => {
  const maxLengthInput = parseInt(input.getAttribute("data-length"));
  if (input.value.length === maxLengthInput) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
