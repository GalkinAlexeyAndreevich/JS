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

  let fullTable = buildTable(localArr, massInput1,table)
  let divTable = fullTable.divTable
  console.log(divTable)
  container.append(divTable)

  const myForm = createForm(massInput1,container);
  myForm.classList.add("close")
  fullTable.butCreateStudent.addEventListener('click',()=>{
    divTable.innerHTML = ""
    myForm.classList.remove("close")
    console.log("создали форму")
    console.log(divTable)

  })
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    myForm.classList.add("close")
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

    container.innerHTML = "";
    console.log(divTable)
    divTable = buildTable(localArr, massInput1,table).divTable
    
    console.log("Все выполнили")
    container.append(divTable)
    console.log(divTable)
    document.querySelector(".butCreateStudent").addEventListener('click',()=>{
      divTable.innerHTML = ""
      myForm.classList.remove("close")
      console.log("создали форму")
      console.log(divTable)
  
    })
    // myForm.innerHTML = ""
  });
}




