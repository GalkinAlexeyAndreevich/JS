import { createItemContact } from "./createItemContact.js"
import { fillTable } from "./fillTable.js"
import { deleteForm } from "./deleteForm.js";
export function changeForm(){
    const formChange = document.querySelector('.modal-change')

    const tableBody = document.querySelector('tbody')
    const tableBtn = tableBody.querySelectorAll('.table_btn')

    const changeBtnEnd = formChange.querySelector(".change-btn");   
    const divContacts = formChange.querySelector(".add-contacts-div"); 

    const close = formChange.querySelector(".form-close")

    const inputSurname = formChange.querySelector(".change-surname")
    const inputName= formChange.querySelector(".change-name")
    const inputPostName = formChange.querySelector(".change-postName") 
    
    let arrClients = JSON.parse(localStorage.getItem('client'))
    const btnAddContacts = formChange.querySelector(".btn-form-cont")

    let arrItem = []
    let index = ''
        for(let item of tableBtn){ 
            let changeBtn = item.querySelector('.btn-change')
            changeBtn.addEventListener('click',()=>{
                
                console.log(changeBtn)
                    divContacts.innerHTML = ''
    
                    arrItem = changeBtn.className.split(' ')
                    index = arrItem[arrItem.length-1]

                    let arrFio = arrClients[index].fio.split(' ')
                    inputSurname.value = arrFio[0]
                    inputName.value = arrFio[1]
                    inputPostName.value = arrFio[2]

                    for(let contact of arrClients[index].contacts){
                        let divContact = createItemContact()
                        divContact.querySelector('.select-contact').value = contact.type
                        divContact.querySelector('.input-contact').value = contact.value
                        divContacts.append(divContact)


                    }
                    formChange.style.display = 'flex'
                    formChange.querySelector('.text-title').innerHTML = `ID: ${index}`
    

            })
    
            changeBtnEnd.addEventListener('click',()=>{
                // changeClient(arr, index)
                let contactsArr = []
                const inputContacts = formChange.querySelectorAll(".input-contact")
                const selectContacts = formChange.querySelectorAll(".select-contact")
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
                changeForm()
                deleteForm()
            })
        }
        btnAddContacts.addEventListener('click',()=>{
            const divContact = createItemContact()
            const allItems = divContacts.querySelectorAll('.item-contact')
            if(allItems){
                if(allItems.length > 10){
                    btnAddContacts.style.display = 'none'
                } 
            }
  
            divContacts.append(divContact)
            let removeContacts = formChange.querySelectorAll('.closeContact')
            for(let removeContact of removeContacts){
                removeContact.addEventListener('click',()=>{
                    removeContact.parentElement.remove()
                    if(removeContacts.length < 10){btnAddContacts.style.display = 'flex'}
                })
            }
        })
        close.addEventListener('click',()=>{
            formChange.style.display = "none" 
            divContacts.innerHTML = ''
        })
}
