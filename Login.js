/********* Targetting required elements *********/
const loginForm = document.getElementById("loginForm"),
    loginUsernameField = document.getElementById("loginUsernameField"),
    loginErrorMsg = document.getElementById("loginErrorMsg"),
    loginPasswordField = document.getElementById("loginPasswordField"),
    loginMsg = document.getElementById("loginMsg");

/********* Event listeners *********/
loginForm.addEventListener("submit", login)

/********* Function declarations *********/
function showLoginForm() {
    loginForm.classList.add("show");
}

function login(e) {
    e.preventDefault();
    // Get values required fields
    let login_username = loginUsernameField.value,
        login_password = loginPasswordField.value;
    // Checking username
    matchUsername(login_username);
    // Checking password
    matchPassword(login_password);
    // Removing error message after 3 seconds
    if (matchUsername(login_username) && matchPassword(login_password)) {
        // Changer login status in the storage
        let login_status = localStorage.getItem("Logout");
        login_status = "no";
        localStorage.setItem("Logout", login_status);
        loginForm.classList.toggle("hide");

        loginForm.addEventListener("transitionend", () => {
            loginForm.remove();
            loginMsg.classList.add("show");
        })

        loginMsg.addEventListener("animationend", () => {
            loginMsg.remove();
            loginForm.reset();
            location.href = "Index.html";
        })
    } else {
        loginErrorMsg.innerText = "failed to login! try again";
    }
    setTimeout(() => {
        loginErrorMsg.classList.remove("show");
    }, 3000)
}

const matchUsername = (login_username) => {
    if (login_username === localStorage.getItem("Username")) {
        return true;
    } else {
        loginErrorMsg.classList.add("show");
        loginErrorMsg.innerText = "Incorrect username";
        loginUsernameField.value = '';
        loginUsernameField.focus();
    }
}

const matchPassword = (login_password) => {
    if (login_password === localStorage.getItem("Password")) {
        return true;
    } else {
        loginErrorMsg.classList.add("show");
        loginErrorMsg.innerText = "incorrect password";
        loginPasswordField.value = '';
        loginPasswordField.focus();
    }
}