import { fillTable } from "./fillTable.js";
import { createItemContact } from "./createItemContact.js"
import { changeForm } from "./changeForm.js";
import { deleteForm } from "./deleteForm.js";
export function addForm(){
    const formAddUser = document.querySelector(".modal2")
    const btnOtmena = formAddUser.querySelector(".btn-del-form");

    const btnAddCont = document.querySelector(".form-btn");

    const close = formAddUser.querySelector(".form-close")

    const divContacts = formAddUser.querySelector(".add-contacts-div")
    const btnAddContacts = formAddUser.querySelector(".btn-form-cont")

    let arrClients = JSON.parse(localStorage.getItem('client'))
    console.log('массив при добвалении',arrClients)
    
    const surname = formAddUser.querySelector(".surname");
    const name = formAddUser.querySelector(".name");
    const postName = formAddUser.querySelector(".postName");
    let data = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString().slice(0,5)


    // console.log(arrContacts)
    btnAddCont.addEventListener('click',(e)=>{
        e.preventDefault()
        if (surname.value && name.value) {
            let arrClients = JSON.parse(localStorage.getItem('client'))
            const inputContacts = formAddUser.querySelectorAll(".input-contact")
            const selectContacts = formAddUser.querySelectorAll(".select-contact")
            let arrContacts = []
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
            console.log('добавили')
            console.log(arrClients.length,surname.value, name.value, postName.value,data, time)
            let fio = surname.value + ' ' + name.value + ' ' + postName.value
            let obj = {
                id:arrClients.length,
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
            arrClients.push(obj)
            console.log(arrClients)
            localStorage.setItem('client', JSON.stringify(arrClients))
            fillTable(arrClients)
            formAddUser.style.display = "none"
            surname.value = ""
            name.value = "";
            postName.value = "";
            for(let i=0; i<inputContacts.length; i++){
               inputContacts[i].value = ''
               selectContacts[i].value = 'phone'
    
            }

            changeForm()
            deleteForm()
        }
    })
    
    btnOtmena.addEventListener("click", () => {
      formAddUser.style.display = "none";
    });
    
    btnAddContacts.addEventListener('click',()=>{
        console.log('проверка')
        const divContact = createItemContact()
        const allItems = divContacts.querySelectorAll('.item-contact')
        if(allItems){
            if(allItems.length > 10){
                btnAddContacts.style.display = 'none'
            } 
        }

        divContacts.append(divContact)
        let removeContacts = formAddUser.querySelectorAll('.closeContact')
        for(let removeContact of removeContacts){
            removeContact.addEventListener('click',()=>{
                removeContact.parentElement.remove()
                if(removeContacts.length < 10){btnAddContacts.style.display = 'flex'}
            })
        }
    })
    close.addEventListener('click',()=>{
        formAddUser.style.display = "none" 
        divContacts.innerHTML = ''
    })
    
}