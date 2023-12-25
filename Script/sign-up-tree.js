// input
let selectFieldOfStudy = document.querySelector(".select-field-of-study");
let selectGrade = document.querySelector(".select-grade");
let inputPreviousEntranceExamRankSignUp = document.querySelector(
  ".input-previous-entrance-exam-rank-sign-up"
);

let btnSubmitSignUp = document.querySelector(".btn-submit-sign-up");

// functions
function signUpTree() {
  localStorage.setItem(
    "fieldOfStudyStudent",
    JSON.stringify(selectFieldOfStudy.value)
  );
  localStorage.setItem("gradeStudent", JSON.stringify(selectGrade.value));
  localStorage.setItem(
    "PreviousEntranceExamRankStudent",
    JSON.stringify(inputPreviousEntranceExamRankSignUp.value)
  );

  selectFieldOfStudy.value = "";
  selectGrade.value = "";
  inputPreviousEntranceExamRankSignUp.value = "";
}

window.addEventListener("dblclick", function () {
  console.log(selectFieldOfStudy.value);
});

btnSubmitSignUp.addEventListener("click", signUpTree);
