const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector("#booking-form");
const status = document.querySelector("#status");
const ticket = document.querySelector("#ticket");
const ticketDetails = document.querySelector("#ticket-details");
function setField(name, valid, errorMessage) {
    const input = form.elements[name];
    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    document.querySelector(`#${name}-error`).textContent = valid ? "" : errorMessage;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const seatsText = form.elements.seats.value.trim();
    const seats = Number(seatsText);
    const nameValid = namePattern.test(name);
    const emailValid = emailPattern.test(email);
    const seatsValid = seatsText !== "" && Number.isInteger(seats) && seats >= 1 && seats <= 10;
    setField("name", nameValid, "Use alphabets and spaces only.");
    setField("email", emailValid, "Enter a valid email address.");
    setField("seats", seatsValid, "Enter a whole number from 1 to 10.");
    if (!(nameValid && emailValid && seatsValid)) {
        status.textContent = "Please correct the highlighted fields.";
        status.className = "failure";
        ticket.hidden = true;
        return;
    }
    const booking = { name, email, seats };
    ticketDetails.innerHTML = `<p><span>Name</span><strong>${booking.name}</strong></p><p><span>Email</span><strong>${booking.email}</strong></p><p><span>Seats</span><strong>${booking.seats}</strong></p><p><span>Reference</span><strong>MV-${Date.now().toString().slice(-6)}</strong></p>`;
    status.textContent = "Booking created successfully.";
    status.className = "success";
    ticket.hidden = false;
});
["name", "email", "seats"].forEach((name) => {
    form.elements[name].addEventListener("input", () => {
        form.elements[name].classList.remove("valid", "invalid");
        document.querySelector(`#${name}-error`).textContent = "";
    });
});
