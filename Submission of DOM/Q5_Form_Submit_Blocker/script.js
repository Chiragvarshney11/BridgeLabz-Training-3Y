const signupForm = document.querySelector("#signupForm");
const fields = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password")
};
const errors = {
  name: document.querySelector("#nameError"),
  email: document.querySelector("#emailError"),
  password: document.querySelector("#passwordError")
};
const successMessage = document.querySelector("#successMessage");

function validateField(fieldName) {
  const value = fields[fieldName].value.trim();
  let message = "";

  if (fieldName === "name" && !value) {
    message = "Name is required.";
  } else if (fieldName === "email") {
    if (!value) message = "Email is required.";
    else if (!value.includes("@")) message = "Email must contain @.";
  } else if (fieldName === "password" && value.length < 6) {
    message = "Password must contain at least 6 characters.";
  }

  errors[fieldName].textContent = message;
  fields[fieldName].classList.toggle("invalid", Boolean(message));
  fields[fieldName].setAttribute("aria-invalid", String(Boolean(message)));
  return !message;
}

Object.keys(fields).forEach((fieldName) => {
  fields[fieldName].addEventListener("input", () => {
    validateField(fieldName);
    successMessage.textContent = "";
  });
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop the browser's default form submission.

  const isValid = Object.keys(fields).map(validateField).every(Boolean);

  if (isValid) {
    successMessage.textContent = "Form Submitted Successfully";
    signupForm.reset();
    Object.keys(errors).forEach((fieldName) => {
      errors[fieldName].textContent = "";
      fields[fieldName].classList.remove("invalid");
      fields[fieldName].removeAttribute("aria-invalid");
    });
  } else {
    successMessage.textContent = "";
  }
});
