// console.log("rioba");
const form = document.querySelector("form");
const email = document.getElementById("email-address");
const emailError = document.querySelector(".error");

email.addEventListener("input", (event) => {
  if (!email.validity.valid) {
    showError();
  }
});

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  emailError.className = "error active-error";
}
