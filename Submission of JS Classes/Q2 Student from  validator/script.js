const patterns = {
    name: /^[A-Za-z ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};
const messages = {
    name: "Use alphabets and spaces only.",
    email: "Enter a valid email address.",
    phone: "Enter exactly 10 digits.",
    password: "Add an uppercase letter, a number, and a special character."
};
const form = document.querySelector("#student-form");
const status = document.querySelector("#status");

function validateField(name) {
    const input = form.elements[name];
    const valid = patterns[name].test(input.value.trim());
    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    document.querySelector(`#${name}-error`).textContent = valid ? "" : messages[name];
    return valid;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid = ["name", "email", "phone", "password"].map(validateField).every(Boolean);
    status.textContent = valid ? "All details are valid." : "Please correct the highlighted fields.";
    status.className = valid ? "success" : "failure";
});
["name", "email", "phone", "password"].forEach((name) => {
    form.elements[name].addEventListener("input", () => {
        if (form.elements[name].classList.contains("invalid")) validateField(name);
    });
});
