let studentName = document.querySelector(".student-name");
let studentUserName = document.querySelector(".student-user-name");
let studentFieldOfStudy = document.querySelector(".fieldOfStudy-student");
let studentGrade = document.querySelector(".grade-student");
let studentAge = document.querySelector(".age-student");
let descInfoStudent = document.querySelectorAll(".desc-info-student");
let btnEditInfo = document.querySelector(".btn-edit-info-student");
let descInfoStudentTel = document.querySelector(".desc-info-student-tel");
let descInfoStudentEmail = document.querySelector(".desc-info-student-email");
let descInfoStudentCity = document.querySelector(".desc-info-student-city");
let btnDeleteAccount = document.querySelector(".btn-delete-account");

// functions

function informationStudent() {
  // name and last name
  studentName.innerHTML =
    JSON.parse(localStorage.getItem("nameStudent")) +
    " " +
    JSON.parse(localStorage.getItem("lastNameStudent"));
  // username
  studentUserName.innerHTML = JSON.parse(
    localStorage.getItem("UserNameStudent")
  );
  //fieldOfStudy
  studentFieldOfStudy.innerHTML = JSON.parse(
    localStorage.getItem("fieldOfStudyStudent")
  );
  // Grade
  studentGrade.innerHTML = JSON.parse(localStorage.getItem("gradeStudent"));
  //   age
  studentAge.innerHTML = JSON.parse(localStorage.getItem("ageStudent"));
  // tel
  descInfoStudentTel.innerHTML = JSON.parse(localStorage.getItem("numberStudent"));
  // email
  descInfoStudentEmail.innerHTML = JSON.parse(localStorage.getItem("emailStudent"));
  // city
  descInfoStudentCity.innerHTML = JSON.parse(localStorage.getItem("cityStudent"));
}

let edit = false;
function editInfo() {
  if (!edit) {
    edit = true;
    btnEditInfo.innerHTML = "ثبت تغییرات";
    descInfoStudent.forEach(function (input) {
      input.removeAttribute("disabled");
      input.setAttribute(
        "style",
        "caret-color: var(--purple-dark);border-right: 2px solid var(--purple-dark);"
      );
      localStorage.setItem(
        "cityStudent",
        JSON.stringify(descInfoStudentCity.value)
      );
      localStorage.setItem(
        "emailStudent",
        JSON.stringify(descInfoStudentEmail.value)
      );
      localStorage.setItem(
        "numberStudent",
        JSON.stringify(descInfoStudentTel.value)
      );
    });
  } else {
    edit = false;
    btnEditInfo.innerHTML = "ویرایش";
    descInfoStudent.forEach(function (input) {
      input.setAttribute("disabled", "disabled");
      input.setAttribute(
        "style",
        "caret-color: var(--black); border-right: 1px solid var(--black)"
      );
    });
  }
}

function deleteAccount() {
  localStorage.clear();
}

window.addEventListener("load", informationStudent);
btnEditInfo.addEventListener("click", editInfo);
btnDeleteAccount.addEventListener("click", deleteAccount);
