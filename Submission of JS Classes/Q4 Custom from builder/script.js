const fields = [
    { type: "text", name: "username", label: "Username", placeholder: "Enter username", required: true },
    { type: "email", name: "email", label: "Email address", placeholder: "you@example.com", required: true },
    { type: "select", name: "course", label: "Course", options: ["Computer Science", "Data Science", "Information Technology"], required: true },
    { type: "textarea", name: "goals", label: "Learning goals", placeholder: "What would you like to learn?", required: false }
];
class FormBuilder {
    constructor(fields, formElement) {
        this.fields = fields;
        this.formElement = formElement;
    }
    createForm() {
        this.formElement.innerHTML = this.fields.map((field) => {
            const required = field.required ? "required" : "";
            let control;
            if (field.type === "select") {
                control = `<select id="${field.name}" name="${field.name}" ${required}><option value="">Choose an option</option>${field.options.map((option) => `<option value="${option}">${option}</option>`).join("")}</select>`;
            } else if (field.type === "textarea") {
                control = `<textarea id="${field.name}" name="${field.name}" placeholder="${field.placeholder}" ${required}></textarea>`;
            } else {
                control = `<input id="${field.name}" name="${field.name}" type="${field.type}" placeholder="${field.placeholder}" ${required}>`;
            }
            return `<div class="field"><label for="${field.name}">${field.label}</label>${control}</div>`;
        }).join("") + '<button type="submit">Submit form</button>';
    }
    getFormData() {
        return Object.fromEntries(new FormData(this.formElement).entries());
    }
}
const form = document.querySelector("#generated-form");
const output = document.querySelector("#output");
const builder = new FormBuilder(fields, form);
builder.createForm();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    output.textContent = JSON.stringify(builder.getFormData(), null, 4);
});
