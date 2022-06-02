import { fillTable } from "./fillTable.js";
export function changeClient(arr, index){
    const formChange = document.querySelector(".modal-change")
    const inputSurname = formChange.querySelector(".change-surname")
    const inputName= formChange.querySelector(".change-name")
    const inputPostName = formChange.querySelector(".change-postName")
    // let contacts
    const inputContacts = formChange.querySelectorAll(".input-contact")
    // for(let item of inputContacts){

    // }

    let fio = inputSurname.value + ' ' + inputName.value + ' ' + inputPostName.value
    arr[index].fio = fio
    arr[index].dataChange = new Date().toLocaleDateString(),
    arr[index].timeChange = new Date().toLocaleTimeString().slice(0,5),
    arr[index].fullDateChange = new Date()
    // arr[index].contacts
    localStorage.setItem('client', JSON.stringify(arr))
    fillTable(arr)
    formChange.style.display = 'none'
}