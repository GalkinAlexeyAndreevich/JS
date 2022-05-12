import { CreateInformationInput } from "./modules/inputInformation.js";
import { createForm } from "./modules/createForm.js";
// import { checkBirthday} from "./modules/checkBirthday.js"
// import { checkYearBegin} from "./modules/checkYearBegin.js"
import {buildTable} from "./modules/buildTable.js"
import { createItem } from "./modules/createItem.js";
export function createApp(container,localArr, key){
  // let massStudents = [];
  if (localStorage.getItem(key)) {
    localArr = JSON.parse(localStorage.getItem(key));

    // for (let obj of localArr){
    //   massStudents.push(obj)
    // }
}

  let table = document.createElement("table");
  
  table.classList.add("myTable");
  let now = new Date();
  console.log(now);

  let massInput1 = CreateInformationInput();
  // table = buildTable(massStudents, massInput1,table)
  table = buildTable(localArr, massInput1,table)
  container.append(table)
  const myForm = createForm(massInput1,container);



  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    localArr = JSON.parse(localStorage.getItem(key)) || localArr
    let obj = createItem(massInput1)
    console.log("Вы ввели: ", obj)
    // if(!obj){
    //   return
    // }
    localArr.push(obj)
    localStorage.setItem(key, JSON.stringify(localArr))
    // massStudents.push(createItem(massInput1))

    for (let i = 0; i < myForm.length - 1; i++) {
      myForm[i].value = "";
    }

    table.innerHTML = "";
    table = buildTable(localArr, massInput1,table)
    // table = buildTable(massStudents, massInput1,table)
    // container.append(table)
  });
}




