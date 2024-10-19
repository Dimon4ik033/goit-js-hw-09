'use strict';

let formData = {
    email: "",
    message: ""
};
 
const form = document.querySelector('.feedback-form');

function saveToLocalStorage() {
  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
});

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.email.value.trim() === "" || form.message.value.trim() === "") {
        alert("Fill please all fields");
        return;
    }

    console.log({
        email: form.email.value.trim(),
        message: form.message.value.trim()
    });

    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    form.reset();
});