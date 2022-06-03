import { fillTable } from "./fillTable.js";
// import { createItemContact } from "./createItemContact.js"
export function createUser(){
    const formAddUser = document.querySelector(".modal2")
    const btnOtmena = formAddUser.querySelector(".btn-del-form");
    const divContacts = formAddUser.querySelector(".add-contacts-div"); 

    // const divContacts = formAddUser.querySelector(".add-contacts-div"); 
    // const btnAddContacts = formAddUser.querySelector(".btn-form-cont")
    // console.log(btnAddContacts)

    const inputContacts = formAddUser.querySelectorAll(".input-contact")
    const selectContacts = formAddUser.querySelectorAll(".select-contact")
    console.log(inputContacts)
    console.log(selectContacts)
    const arr = JSON.parse(localStorage.getItem('client'))

    let arrContacts = []
    const surname = formAddUser.querySelector(".surname");
    const name = formAddUser.querySelector(".name");
    const postName = formAddUser.querySelector(".postName");
    surname.placeholder = 'Введите фамилию'
    name.placeholder= 'Введите имя '
    surname.classList.remove('error')
    name.classList.remove('error')
    let data = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString().slice(0,5)

    for(let i=0; i<inputContacts.length; i++){
        if(!(inputContacts[i].value.trim())){
            continue
        }
        let contact = {
            type:selectContacts[i].value,
            value:inputContacts[i].value.trim()
        }
        arrContacts.push(contact)
    }
    console.log(arrContacts)
    if (surname.value && name.value) {
        console.log('добавили')
        console.log(arr.length,surname.value, name.value, postName.value,data, time)
        let fio = surname.value + ' ' + name.value + ' ' + postName.value
        let obj = {
            id:arr.length,
            fio:fio,
            // surname:surname.value,
            // name: name.value,
            // postName:postName.value,
            dataCreate:new Date().toLocaleDateString(),
            timeCreate:new Date().toLocaleTimeString().slice(0,5),
            dataChange:new Date().toLocaleDateString(),
            timeChange:new Date().toLocaleTimeString().slice(0,5),
            fullDateCreate:new Date(),
            fullDateChange:new Date(),
            contacts:arrContacts
        }
        arr.push(obj)
        console.log(arr)
        localStorage.setItem('client', JSON.stringify(arr))
        fillTable(arr)
        formAddUser.style.display = "none"
        surname.value = ""
        name.value = "";
        postName.value = "";
        divContacts.innerHTML = ''
        // for(let i=0; i<inputContacts.length; i++){
        //     inputContacts[i].value = ''
        //     selectContacts[i].value = 'phone'
        // }
    
    }
    else{
        surname.placeholder = 'Вы не ввели фамилию'
        name.placeholder= 'Вы не ввели имя '
        surname.classList.add('error')
        name.classList.add('error')
    }
    btnOtmena.addEventListener("click", () => {
      formAddUser.style.display = "none";
    });

}