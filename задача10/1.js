let massStudents = [];
let table = document.createElement('table');
table.classList.add("myTable")
let now = new Date()
console.log(now)
// now = formatDate(now)
// console.log(now)
let massInput1 = [
  {
    class: "inputName",
    name: "name",
    nameRus:"Имя",
    placeholder: "Введите имя",
  },
  {
    class: "inputSurname",
    name: "surname",
    nameRus:"Фамилия",
    placeholder: "Введите фамилию",
  },
  {
    class: "inputPatronymic",
    name:"patronymic",
    nameRus:"Отчество",
    placeholder: "Введите отчество",
  },
  {
    class: "inputBirthday",
    name:"birthday",
    nameRus:"Дата рождения",
    placeholder: "Введите дату рождения",
  },
  {
    class: "inputYearBegin",
    name:"yearBegin",
    nameRus:"Год начала обучения",
    placeholder: "Введите год поступления",
  },
  {
    class: "inputFaculty",
    name:"faculty",
    nameRus:"Факультет",
    placeholder: "Введите факультет",
  },
];

const container = document.querySelector(".container");
const myForm = document.createElement("form");
myForm.classList.add("myForm");

for (let i = 0; i < massInput1.length; i++) {
  const input = document.createElement("input");
  input.classList.add(massInput1[i].class);
  input.placeholder = massInput1[i].placeholder;
  if(massInput1[i].name == "birthday"){
    input.type = "Date"
  }
  myForm.append(input);
}

const butSubmitForm = document.createElement("button");
butSubmitForm.classList.add("butSubmitForm");
butSubmitForm.textContent = "Отправить форму";
myForm.append(butSubmitForm);
container.append(myForm);

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {}
  for (let i = 0; i < massInput1.length; i++) {
    let classInput = "." + massInput1[i].class;
    const input = document.querySelector(classInput);
    
    let inputValue = input.value.trim()
    // if(!inputValue.length){
    //   alert(massInput1[i].placeholder)
    //   return
    // }
    // if(massInput1[i].name == "birthday"){
    //   console.log("Это дата")
    //   inputValue = rusDate(inputValue)
    //   console.log(inputValue)
    //   // console.log("Зашли, дата:", inputValue)
    //   // inputValue = rusDate(inputValue)
    //   // console.log("Вышли, дата:", inputValue)
    //   // console.log(inputValue)
    //   // console.log(obj[massInput1[i].name] )
    // }
    // if(massInput1[i].name == "birthday" && rusDate(inputValue) > rusDate("01-01-1900")){
  
    //   // console.log("Дата рождения не выходит за диапозон", rusDate(inputValue)< rusDate("01-01-1900"), typeof(inputValue))
    //   // console.log( rusDate(inputValue),rusDate("01-01-1900"))
    // }
    // if(massInput1[i].name == "birthday" && rusDate(inputValue) < rusDate("01-01-1900")){
    if(massInput1[i].name == "birthday"){
      if(comparison(inputValue,"01-01-1900")){
        alert("Дата рождения выходит за диапозон(01.01.1900)")
      return
      }
      con
      let age = (now.getFullYear() - inputValue.getFullYear())
      console.log(age)
      inputValue = rusDate(inputValue).join(".")
      console.log(inputValue)
    }
    if(massInput1[i].name == "yearBegin" && (inputValue < "2000" || inputValue > now.getFullYear())){
      alert("Год поступлеления выходит за диапозон(от 2000 до сегодня)")
      return
    }
    // if(massInput1[i].name == "birthday"){
    //   console.log(inputValue)
    //   // console.log("Зашли, дата:", inputValue)
    //   // inputValue = rusDate(inputValue)
    //   // console.log("Вышли, дата:", inputValue)
    //   // console.log(inputValue)
    //   // console.log(obj[massInput1[i].name] )
    // }
    else{obj[massInput1[i].name] = inputValue}
  }
  massStudents.push(obj)

  for(let i=0; i<myForm.length-1;i++){
    myForm[i].value = ""
  }
  
  table.innerHTML = ""
  buildTable(massStudents,massInput1)
});

function buildTable(massStudents, massInput1) {

  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  container.append(table)
  table.appendChild(thead);
  table.appendChild(tbody);
  
  for(let i = 0;i<massStudents.length+1;i++){
    let row = document.createElement('tr');
    if(i == 0){
      for(let j = 0;j<massInput1.length;j++){
      let cell = document.createElement('th')
      cell.textContent = massInput1[j].nameRus
      row.appendChild(cell)
      }
    }
    else{
      fillRow(i-1,row)
    }
    
    thead.appendChild(row)
    
  }
}
function fillRow(i,row){
  for(let j = 0;j<massInput1.length;j++){
    let cell = document.createElement('th')
    cell.textContent = massStudents[i][massInput1[j].name]
    row.appendChild(cell)
  }
}
// function formatDate(date) {
//   console.log(date)
//   // let dd = date.getDate();
//   // if (dd < 10) {dd = '0' + dd};

//   // let mm = date.getMonth() + 1;
//   // if (mm < 10) {mm = '0' + mm};

//   // let yy = date.getFullYear();

//   return dd + '.' + mm + '.' + yy;
// }
function rusDate(date){
let date2 = date.split("-")
  // console.log(date2)
  if(date2[0].length == 4){console.log("Это год")}
  if(date2[0].length == 4){
    
    [date2[0], date2[date2.length-1]]  = [date2[date2.length-1], date2[0]]
  }
// console.log(date2)
// date2 = date2.join(".")
// console.log(date2)
return date2
}
function comparison(date1,date2){
  date1 = rusDate(date1)
  date2 = rusDate(date2)
  console.log(date1,date2)
  let check = false
  
  for(let i=date1.length-1; i> 0; i--){
    console.log(date1[i], date2[i])
    if(date1[i] < date2[i]){
      check = true
      return check
    }
  }
  // date1 = date1.join(".")
}

// data2 = data.split("-")
// if(data2[0].length == 4){
//     // console.log("Это год")
//     [data2[0], data2[data2.length-1]]  = [data2[data2.length-1], data2[0]]
// }
// data2 = data2.join("/")
