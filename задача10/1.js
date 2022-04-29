let massStudents = [];
// let obj = {
//   name,
//   surname,
//   patronymic,
//   birthday,
//   yearBegin,
//   faculty
// };

let massInput1 = [
  {
    class: "inputName",
    name: "name",
    placehold: "Введите имя",
  },
  {
    class: "inputSurname",
    name: "surname",
    placehold: "Введите фамилию",
  },
  {
    class: "inputPatronymic",
    // name,
    placehold: "Введите отчество",
  },
  {
    class: "inputBirthday",
    // name,
    placehold: "Введите год рождения",
  },
  {
    class: "inputYearBegin",
    // name,
    placehold: "Введите год поступления",
  },
  {
    class: "inputFaculty",
    // name,
    placehold: "Введите факультет",
  },
];
// let massInput = [
//   "inputName",
//   "inputSurname",
//   "inputPatronymic",
//   "inputBirthday",
//   "inputYearBegin",
//   "inputFaculty",
// ];
// let massPlaceholder = [
//   "Введите имя",
//   "Введите фамилию",
//   "Введите отчество",
//   "Введите год рождения",
//   "Введите год поступления",
//   "Введите факультет",
// ];

const container = document.querySelector(".container");
const myForm = document.createElement("form");
myForm.classList.add("myForm");
for (let i = 0; i < massInput1.length; i++) {
  const input = document.createElement("input");
  input.classList.add(massInput1[i].class);
  input.placeholder = massInput1[i].placehold;
  myForm.append(input);
}
const butSubmitForm = document.createElement("button");
butSubmitForm.classList.add("butSubmitForm");
butSubmitForm.textContent = "Отправить форму";
myForm.append(butSubmitForm);
container.append(myForm);

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // let obj = {

  // };
  let obj = {
    name,
    surname,
    patronymic,
    birthday,
    yearBegin,
    faculty,
  };
  for (let i = 0; i < massInput1.length; i++) {
    let classInput = "." + massInput1[i].class;
    const input = document.querySelector(classInput);
    // let word = massInput1[i].name;
    // obj.append;
    // obj.word = input.value;
    console.log(obj);
    // console.log(input);
  }
  console.log(obj);
  // let obj = {
  //   name,
  //   surname,
  //   patronymic,
  //   birthday,
  //   yearBegin,
  //   faculty
  // };
});
