import { fillTable } from "./fillTable.js";
export function changeClient(index){
    let contactsArr = []
    const formChange = document.querySelector(".modal-change")
    const inputSurname = formChange.querySelector(".change-surname")
    const inputName= formChange.querySelector(".change-name")
    const inputPostName = formChange.querySelector(".change-postName")
    const inputContacts = formChange.querySelectorAll(".input-contact")
    const selectContacts = formChange.querySelectorAll(".select-contact")
    let arrClients = JSON.parse(localStorage.getItem('client'))
    for(let i=0; i<inputContacts.length; i++){
        if(!inputContacts[i].value.trim()){
            continue
        }
        contactsArr.push({
            type:selectContacts[i].value,
            value:inputContacts[i].value
        })
    }

    let fio = inputSurname.value + ' ' + inputName.value + ' ' + inputPostName.value
    arrClients[index].fio = fio
    arrClients[index].contacts = contactsArr
    arrClients[index].dataChange = new Date().toLocaleDateString(),
    arrClients[index].timeChange = new Date().toLocaleTimeString().slice(0,5),
    arrClients[index].fullDateChange = new Date()
    localStorage.setItem('client', JSON.stringify(arrClients))
    fillTable(arrClients)
    formChange.style.display = 'none'
    // const formChange = document.querySelector(".modal-change")
    // const inputSurname = formChange.querySelector(".change-surname")
    // const inputName= formChange.querySelector(".change-name")
    // const inputPostName = formChange.querySelector(".change-postName")
    // // let contacts
    // const inputContacts = formChange.querySelectorAll(".input-contact")
    // // for(let item of inputContacts){

    // // }

    // let fio = inputSurname.value + ' ' + inputName.value + ' ' + inputPostName.value
    // arr[index].fio = fio
    // arr[index].dataChange = new Date().toLocaleDateString(),
    // arr[index].timeChange = new Date().toLocaleTimeString().slice(0,5),
    // arr[index].fullDateChange = new Date()
    // // arr[index].contacts
    // localStorage.setItem('client', JSON.stringify(arr))
    // fillTable(arr)
    // formChange.style.display = 'none'
}