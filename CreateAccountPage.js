// const createAccountForm = document.getElementById("createAccountForm"),
//     nameField = document.getElementById("nameField"),
//     usernameField = document.getElementById("usernameField"),
//     emailField = document.getElementById("emailField"),
//     passwordField = document.getElementById("passwordField"),
//     createAccountFormBtn = document.getElementById("createAccountFormBtn"),
//     // usernameCriterias = document.querySelector(".usernameCriterias"),
//     nameError = document.getElementById("nameErr"),
//     usernameError = document.getElementById("usernameErr");

// // Event listeners
// createAccountForm.addEventListener("submit", validateForm)

// nameField.addEventListener("keyup", validateName)
// usernameField.addEventListener("keyup", validateUsername)

// // Functrion declarations
// function validateName() {
//     if (nameField.value === '') {
//         nameField.focus();
//         nameError.classList.toggle("show");
//         nameError.innerText = "name can't be blank";
//     } else {
//         if (nameField.value.length < 3) {
//             nameError.classList.add("show");
//             nameError.innerText = "name is too small";
//         } else {
//             nameError.innerText = '';
//             nameError.classList.remove("show");
//         }
//     }


// }

// function validateUsername() {
//     // e.preventDefault();
//     if (usernameField.value === '') {
//         usernameField.focus();
//         usernameError.classList.add("show");
//         usernameError.innerText = "username can't be blank";
//     } else {
//         // usernameError.innerText = '';
//         // containsLowerCaseCharacter(e);
//         // containsUpperCaseCharacter(e);
//         // containsNumber(e);
//         checkLength();
//     }

//     // Check for space
//     if (usernameField.value.indexOf(' ') === 1) {
//         usernameError.innerText = "username can't contain any space";
//     } else {
//         usernameError.innerText = '';
//     }
// }

// function validateForm(e) {
//     e.preventDefault();
// }

// function containsLowerCaseCharacter(e) {
//     // Check for lowercase character input
//     if ((e.key >= 'a' && e.key <= 'z')) {
//         // usernameCriterias.children[1].classList.add("valid");
//     } else {
//         usernameError.innerText = "please put a lowercase charater";
//     }
// }

// function containsUpperCaseCharacter(e) {
//     // Check for uppercase character input
//     if ((e.key >= 'A' && e.key <= 'Z')) {
//         usernameCriterias.children[2].classList.add("valid");
//     } else {
//         usernameError.innerText = "please put a uppercase charater";
//         usernameCriterias.children[2].classList.remove("valid");
//     }

// }

// function containsNumber(e) {
//     // Check for numeric input
//     if (e.key >= '0' && e.key <= '9') {
//         usernameCriterias.children[3].classList.add("valid");
//     } else {
//         usernameCriterias.children[3].classList.remove("valid");
//         usernameError.innerText = "please put a number";
//     }
// }

// function checkLength() {
//     if (usernameField.value.length > 5 && usernameField.value.length < 15) {
//         // usernameCriterias.children[0].classList.add("valid");
//     } else {
//         usernameError.classList.add("show");
//         usernameError.innerText = "Don't match the required length";
//         // usernameCriterias.children[0].classList.replace("valid","invalid");
//     }
// }
// function usernameCriteriaValidation(){

// }

// /*Algorithm for username validation
// 1. read keyboard event
// 2. check data category of input value
// 3. check criteria

// Problem: when entered key matches given criteria put valid color on satisfied criteria and simultaneously, when matching key(s) removes invalid color is sets on satisfied criteria.

// Solution: separate criteria validation and data validation
// */
/*Search about regular expression for setting minimum and maximum length validation */