/********* Targetting required elements *********/
const themeBtn = document.getElementById("themeBtn"),
    cssThemeLink = document.getElementById("cssThemeLink");

/********* Event listeners *********/
window.addEventListener("DOMContentLoaded", getTheme)

/********* Function declarations *********/
themeBtn.addEventListener("click", function () {
    let theme = "Light";
    if (cssThemeLink.getAttribute("href") === `${theme}.css`) {
        cssThemeLink.setAttribute("href", `Dark.css`)
        theme = "Dark";
        saveThemeToStorage(theme);
    } else {
        cssThemeLink.setAttribute("href", `Light.css`)
        theme = "Light";
        saveThemeToStorage(theme);
    }
})

function saveThemeToStorage(theme) {
    localStorage.setItem("Theme", theme)
}

function getTheme() {
    if (localStorage.getItem("Theme")) {
        let savedTheme = localStorage.getItem("Theme");
        cssThemeLink.setAttribute("href", `${savedTheme}.css`);
    } else {
        cssThemeLink.setAttribute("href", `Light.css`);
    }
}
