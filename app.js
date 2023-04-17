console.log("rioba");

// input form
const inputForm = document.querySelector("form");

inputForm.addEventListener("change", (e) => {
  const isValid = e.target.reportValidity();
  e.target.setAttribute("aria-invalid", !isValid);
});
