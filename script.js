// HTML Variables
const openModalButton = document.querySelector(".btn");
const background = document.querySelector(".background");
const modal = document.querySelector(".modal");
const form = document.querySelector(".sign-up-form");
const confirmationPage = document.querySelector(".confirmation-page");
const closeButton = document.querySelector(".close");
const signUp = document.querySelector(".sign-up");
const goShopBtn = document.querySelector(".go-shop");
const email = document.querySelector(".email-address");


// Local Variables
const emailLogic = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


// Functions
const resetForm = () => {
    confirmationPage.style.display = "none";
    form.style.display = "block";
    email.value = "";
}

const validateEmail = (email) => {
    return String(email).toLowerCase().match(emailLogic);
  };

// Events

openModalButton.onclick = () => {
    background.style.display = "block";
    modal.style.display = "block";
}
closeButton.onclick = () => {
    background.style.display = "none";
    resetForm();
}
goShopBtn.onclick = () => {
    background.style.display = "none";
    resetForm();
}
window.onclick = event => {
    if (event.target == background) {
        background.style.display = "none";
        resetForm();
    }
}

signUp.onclick = event => {
    event.preventDefault();
    if (validateEmail(email.value)) {
        form.style.display = "none";
        confirmationPage.style.display = "block";
        email.value = "";
    } else {
        alert("invalid email")
    }
}