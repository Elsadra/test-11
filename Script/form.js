// form
let formLogin = document.querySelector(".form-login");
let formSignUp = document.querySelector(".form-sign-up");

// text
let textFormSigUp = document.querySelector(".text-form-sig-up");
let textFormLogin = document.querySelector(".text-form-login");

// input sign up
let inputEmailSignUp = document.querySelector(".input-email-sign-up");
let inputUserNameSignUp = document.querySelector(".input-user-name-sign-up");
let inputPasswordSignUp = document.querySelector(".input-password-sign-up");
let inputNumberSignUp = document.querySelector(".input-number-sign-up");

// btn next submit sign up
let btnNextSubmitSignUpTwo = document.querySelector(
  ".btn-next-submit-sign-up-two"
);

// functions
function displayTheRegistrationForm() {
  formLogin.setAttribute("style", "display: none;");
  formSignUp.setAttribute("style", "display: block; opacity: 1;");
}

function DisplayTheLoginForm() {
  formSignUp.setAttribute("style", "display: none;");
  formLogin.setAttribute("style", "display: block; opacity: 1;");
}

function signUpOne() {
  localStorage.setItem("emailStudent", JSON.stringify(inputEmailSignUp.value));
  localStorage.setItem(
    "UserNameStudent",
    JSON.stringify(inputUserNameSignUp.value)
  );
  localStorage.setItem(
    "PasswordStudent",
    JSON.stringify(inputPasswordSignUp.value)
  );
  localStorage.setItem(
    "numberStudent",
    JSON.stringify(inputNumberSignUp.value)
  );

  inputEmailSignUp.value = "";
  inputUserNameSignUp.value = "";
  inputPasswordSignUp.value = "";
  inputNumberSignUp.value = "";
}

textFormSigUp.addEventListener("click", displayTheRegistrationForm);
textFormLogin.addEventListener("click", DisplayTheLoginForm);
btnNextSubmitSignUpTwo.addEventListener("click", signUpOne);
