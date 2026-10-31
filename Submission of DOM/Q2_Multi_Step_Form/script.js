const form = document.querySelector("#multiStepForm");
const steps = [...document.querySelectorAll(".step")];
const stepLabel = document.querySelector("#stepLabel");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const summary = document.querySelector("#summary");
const summaryText = document.querySelector("#summaryText");
let currentStep = 0;

const stepNames = ["Name", "Email", "Password"];

function validateCurrentStep() {
  const input = steps[currentStep].querySelector("input");
  const error = steps[currentStep].querySelector(".error");
  const value = input.value.trim();
  let message = "";

  if (!value) {
    message = "This field is required.";
  } else if (input.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = "Enter a valid email address.";
  } else if (input.name === "password" && value.length < 6) {
    message = "Password must contain at least 6 characters.";
  }

  error.textContent = message;
  input.setAttribute("aria-invalid", String(Boolean(message)));
  return !message;
}

function showStep(index) {
  currentStep = index;
  steps.forEach((step, stepIndex) => {
    step.hidden = stepIndex !== currentStep;
    step.classList.toggle("active", stepIndex === currentStep);
  });
  stepLabel.textContent = `Step ${currentStep + 1} of 3 — ${stepNames[currentStep]}`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? "Finish" : "Next";
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < 2) {
    showStep(currentStep + 1);
    steps[currentStep].querySelector("input").focus();
  } else {
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    // Do not display or expose the password in the summary.
    summaryText.textContent = `Name: ${name} | Email: ${email}`;
    form.hidden = true;
    stepLabel.hidden = true;
    summary.hidden = false;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) showStep(currentStep - 1);
});

steps.forEach((step) => {
  const input = step.querySelector("input");
  input.addEventListener("input", () => {
    step.querySelector(".error").textContent = "";
    input.removeAttribute("aria-invalid");
  });
});

document.querySelector("#restartButton").addEventListener("click", () => {
  form.reset();
  form.hidden = false;
  stepLabel.hidden = false;
  summary.hidden = true;
  steps.forEach((step) => step.querySelector(".error").textContent = "");
  showStep(0);
});

showStep(0);
