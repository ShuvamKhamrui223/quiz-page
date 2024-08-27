/********* Targetting required elements *********/
const createAccountForm = document.getElementById("createAccountForm"),
    fullName = document.getElementById("nameField"),
    username = document.getElementById("usernameField"),
    email = document.getElementById("emailField"),
    password = document.getElementById("passwordField"),
    signupMsg = document.getElementById("signupMsg");

/********* Event listeners *********/
createAccountForm.addEventListener("submit", storeCredential)

/********* Function declarations *********/
function storeCredential(e) {
    e.preventDefault();
    localStorage.setItem("Name", fullName.value || "Guest");
    localStorage.setItem("Username", username.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", password.value);
    localStorage.setItem("Logout", "no");
    createAccountForm.classList.add("hide");
    createAccountForm.reset();
    signupMsg.classList.add("show");
    setTimeout(() => {
        location.href = "Index.html";
    }, 5000)
}

