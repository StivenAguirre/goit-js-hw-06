const loginForm = document.querySelector("form.login-form");
console.log(loginForm);

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  loginForm.reset();
});

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

if (emailInput.value === "" || passwordInput.value === "") {
  alert("Todos los campos deben ser rellenados.");
}

const formData = {
  email: emailInput.value,
  password: passwordInput.value,
};

