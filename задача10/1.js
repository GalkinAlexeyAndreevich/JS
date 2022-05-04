let massStudents = [];
let table = document.createElement('table');
table.classList.add("myTable")
let now = new Date()
// let num = 21547980
// num = num.substr(-1)
// console.log(num)
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

// Создание инпутов
for (let i = 0; i < massInput1.length; i++) {
  const input = document.createElement("input");
  input.classList.add(massInput1[i].class);
  input.placeholder = massInput1[i].placeholder;
  if(massInput1[i].name == "birthday"){
    input.type = "Date"
  }
  myForm.append(input);
}

// Кнопка отправить
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
    
    // Проверки
    let inputValue = input.value.trim()
    // if(!inputValue.length){
    //   alert(massInput1[i].placeholder)
    //   return
    // }
    if(massInput1[i].name == "birthday"){
      if(comparison(inputValue,"01-01-1900")){
        alert(`Дата рождения выходит за диапозон(01.01.1900-сегодня})`)
        return
      }
      let age = now.getFullYear() - inputValue.slice(0,4)
      let monthAge = now.getMonth()+1 - inputValue.slice(5,7)
      let dayAge = now.getDay()+1 - inputValue.slice(8,10)
      if(dayAge<0){
        monthAge-=1
      }
      if(monthAge<0){
        age-=1
      }
      inputValue = rusDate(inputValue).join(".")
      inputValue = `${inputValue} ( ${age} ${transformAge(age)})`
      // inputValue = inputValue +"(" + age + " лет)"
    }
    if(massInput1[i].name == "yearBegin"){
      if(inputValue < "2000" || inputValue > now.getFullYear()){
        alert("Год поступлеления выходит за диапозон(от 2000 до сегодня)")
        return
      }
      let diaposon = `${inputValue}-${Number(inputValue)+4}`
      let kurs = now.getFullYear() - inputValue
      if(kurs > 4){
        inputValue = `${diaposon} (Закончил)`
      }
      else{
        inputValue = `${diaposon} (${kurs} курс)`
        console.log(diaposon,kurs)
      }
      
    }

    obj[massInput1[i].name] = inputValue

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
function rusDate(date){
let date2 = date.split("-")
  // console.log(date2)
  if(date2[0].length == 4){console.log("Это год")}
  if(date2[0].length == 4){
    // console.log("jkdgk")
    [date2[0], date2[date2.length-1]]  = [date2[date2.length-1], date2[0]]
  }
return date2
}
function comparison(date1,date2){
  date1 = rusDate(date1)
  date2 = rusDate(date2)
  console.log(date1,date2)
  let check = false
  
  for(let i=date1.length-1; i> 0; i--){
    console.log(date1[i], date2[i])
    if(date1[i] < date2[i] || date1[i] > now.getFullYear()){
      check = true
      return check
    }
  }
  // date1 = date1.join(".")
}
function transformAge(age){
  if(String(age).substr(-1) == 1){
    return "год"
  }
  else if(String(age).substr(-1) > 1 && String(age).substr(-1)<5){
    return "года"
  }
  else{
    return "лет"
  }
}