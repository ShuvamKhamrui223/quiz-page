/********* Targetting required elements *********/
const createAccountBtn = document.getElementById("createAccountBtn"),
    loginBtn = document.getElementById("loginBtn");
const btns_container = document.querySelector(".btns");

/********* Event listeners *********/
window.addEventListener("DOMContentLoaded", checkStatus)

/********* Function declarations *********/
function checkStatus() {
    let logoutStatus = localStorage.getItem("Logout");
    // Checking for user is currently signed in or not
    if (localStorage.getItem("Username") && logoutStatus === "no") {
        // Remove createAccountBtn from the ui
        createAccountBtn.setAttribute("hidden", true);
        loginBtn.setAttribute("hidden", true);
        // Creating a text element to show username in ui
        const username = document.createElement("strong");
        username.setAttribute("id", "username");
        username.innerText = localStorage.getItem("Username");
        // Adding username into btns_container
        btns_container.appendChild(username);
        // Crearting logout btn
        const logoutBtn = document.createElement("button");
        logoutBtn.setAttribute("id", "logoutBtn");
        logoutBtn.innerText = "log out";
        logoutBtn.addEventListener("click", logout)
        btns_container.appendChild(logoutBtn);

    } else if (localStorage.getItem("Username") && (logoutStatus === "yes")) {
        return false;
    }
}

const logout = (e) => {

    let loginStatus = localStorage.getItem("Logout");
    loginStatus = "yes";
    localStorage.setItem("Logout", loginStatus)

    username.setAttribute("hidden", true);
    e.currentTarget.remove();
    createAccountBtn.removeAttribute("hidden");
    loginBtn.removeAttribute("hidden");
}