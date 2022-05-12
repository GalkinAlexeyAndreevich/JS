import { CreateInformationInput } from "./modules/inputInformation.js";
import { createForm } from "./modules/createForm.js";
import {buildTable} from "./modules/buildTable.js"
import { createItem } from "./modules/createItem.js";


export function createApp(container,localArr, key){
  if (localStorage.getItem(key)) {
    localArr = JSON.parse(localStorage.getItem(key));

}


  let now = new Date();
  console.log(now);

  let massInput1 = CreateInformationInput();

  let table = document.createElement("table");
  table.classList.add("myTable");

  // let fullTable = buildTable(localArr, massInput1,table)
  // let divTable = fullTable.divTable
  // console.log(divTable)
  // container.append(divTable)
  table = buildTable(localArr, massInput1,table)
  container.append(table)

  const myForm = createForm(massInput1);
  container.append(myForm)
  // myForm.classList.add("close")
  // container.append(myForm)
  // fullTable.butCreateStudent.addEventListener('click',()=>{
  //   divTable.classList.add("close")
  //   const divForm = document.createElement("div")
  //   divForm.classList.add("divForm")
  //   divForm.append(myForm)
  //   container.append(divForm)
  // })
  
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // myForm.classList.add("close")
    localArr = JSON.parse(localStorage.getItem(key)) || localArr
    let obj = createItem(massInput1)
    if(!obj){
      return
    }
    console.log("Что-то сделали")
    localArr.push(obj)
    localStorage.setItem(key, JSON.stringify(localArr))

    for (let i = 0; i < myForm.length - 2; i++) {
      myForm[i].value = "";
    }

    // container.innerHTML = "";
    // console.log(divTable)
    table = buildTable(localArr, massInput1,table)
    
    console.log("Все выполнили")
    // container.append(divTable)
    // console.log(divTable)
    // myForm.innerHTML = ""
  });
}




