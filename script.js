const form = document.querySelector("form");
const firstName = document.querySelector("#f-name");
const lastName = document.querySelector("#l-name");
const userEmail = document.querySelector("#email");
const password = document.querySelector("#password");

function showError(inputFeild) {
    if (inputFeild.value === "") {
        inputFeild.parentElement.classList.add("show");
    } else {
        inputFeild.parentElement.classList.remove("show");
    }
}

function emailError(inputFeild) {
    userInputEmail = inputFeild.value;
    if (userInputEmail.length < 3 || !userInputEmail.includes("@") || !userInputEmail.includes(".")) {
        inputFeild.parentElement.classList.add("show"); 
    } else {
        inputFeild.parentElement.classList.remove("show");
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    showError(firstName);
    showError(lastName);
    showError(password);   
    emailError(userEmail); 
})