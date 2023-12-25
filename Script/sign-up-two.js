// input
let inputNameSignUp = document.querySelector(".input-name-sign-up");
let inputLastNameSignUp = document.querySelector(".input-last-name-sign-up");
let inputAgeSignUp = document.querySelector(".input-age-sign-up");
let inputCitySignUp = document.querySelector(".input-city-sign-up");

// btn next submit sign up
let btnNextSubmitSignUpTree = document.querySelector(
  ".btn-next-submit-sign-up-tree"
);

// functions
function signUpTwo() {
  localStorage.setItem("nameStudent", JSON.stringify(inputNameSignUp.value));
  localStorage.setItem(
    "lastNameStudent",
    JSON.stringify(inputLastNameSignUp.value)
  );
  localStorage.setItem("ageStudent", JSON.stringify(inputAgeSignUp.value));
  localStorage.setItem("cityStudent", JSON.stringify(inputCitySignUp.value));

  inputNameSignUp.value = "";
  inputLastNameSignUp.value = "";
  inputAgeSignUp.value = "";
  inputCitySignUp.value = "";
}

console.log(localStorage.getItem("nameStudent"));

btnNextSubmitSignUpTree.addEventListener("click", signUpTwo);
