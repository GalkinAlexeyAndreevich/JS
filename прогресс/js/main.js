import {createUser} from './module/createUser.js'
import { fillTable } from "./module/fillTable.js";
import {sortClients} from "./module/sort.js";
// import {contactsForm} from "./module/contactsForm.js";
import {getFromLocal} from "./module/getFromLocal.js";
import {changeClient} from "./module/changeClient.js";4
import { createItemContact } from "./module/createItemContact.js"
// import {closeForm} from "./module/closeForm.js";

function preloader(){
    setTimeout(()=>{
        document.querySelector('.preload-div').style.display = 'none'
        document.querySelector('.table').classList.remove('display-off')
        document.querySelector('.btn-add-client').classList.remove('display-off')
    },1000)
}
preloader()
function forForm(){
    const btnAddUser = document.querySelector(".btn-add-client")

    const formAddUser = document.querySelector(".modal-add")
    const formChange = document.querySelector(".modal-change")
    const formDelete = document.querySelector(".modal-delete")

    const cross = document.querySelectorAll(".form-close")

    const tableBody = document.querySelector("tbody")

    const btnAddCont = document.querySelector(".form-btn");

    const deleteBtnEnd = formDelete.querySelector(".delete");
    const changeBtnEnd = formChange.querySelector(".change-btn");   

    // contactsForm()
    getFromLocal()

    btnAddUser.onclick = ()=>{
        const divContacts = formAddUser.querySelector(".add-contacts-div"); 
        const btnAddContacts = formAddUser.querySelector(".btn-form-cont")
        formAddUser.style.display = "flex"
        btnAddContacts.onclick = ()=>{
            
            const divContact = createItemContact()
            
            divContacts.append(divContact)
            const allItems = divContacts.querySelectorAll('.item-contact')
            console.log('нажали', allItems.length)
            if(allItems){
                if(allItems.length > 9){
                    btnAddContacts.style.display = 'none'
                } 
            }
    
            
            let removeContacts = formAddUser.querySelectorAll('.closeContact')
            for(let removeContact of removeContacts){
                removeContact.addEventListener('click',()=>{
                    removeContact.parentElement.remove()
                    const allItems = divContacts.querySelectorAll('.item-contact')
                    console.log('нажали', allItems.length)
                    if(allItems.length < 10){btnAddContacts.style.display = 'flex'}
                })
            }
        }
    }

    btnAddCont.addEventListener("click", (e)=>{
        e.preventDefault()
        createUser()
    })

    function closeForm(){
        let mass = [formAddUser, formChange, formDelete]
        for(let i = 0; i < cross.length;i++){
            cross[i].addEventListener("click", ()=>{
                mass[i].style.display = "none"  
                if(i !=2) {
                   mass[i].querySelector('.add-contacts-div').innerHTML = ''
                }
                
            })
            mass[i].addEventListener("click", (e) => {
                if(e.target.closest(".modal__inner")) return
            });
        }
    }


    closeForm()
    
    // const surname = formAddUser.querySelector(".surname");
    // const name = formAddUser.querySelector(".name");
    // const postName = formAddUser.querySelector(".postName");

    let index = ''        
    let arrItem = []
    tableBody.onclick = (e)=>{
        e.preventDefault()
        let arr = JSON.parse(localStorage.getItem('client'))
        // console.log(arr)
        let item = e.target
        // let arrItem = item.className.split(' ')
        console.log(item)
        // Итоговое изменениие
        if(String(item.className).includes('btn-change')){
            console.log('нажали изменить')
            
            const inputSurname = formChange.querySelector(".change-surname")
            const inputName= formChange.querySelector(".change-name")
            const inputPostName = formChange.querySelector(".change-postName") 

            const divContacts = formChange.querySelector(".add-contacts-div"); 
            const btnAddContacts = formChange.querySelector(".btn-form-cont")
            const close = formChange.querySelector(".form-close")

            const deleteClient = formChange.querySelector(".btn-del-form")
            let arrClients = JSON.parse(localStorage.getItem('client'))
            arrItem = item.className.split(' ')
            index = arrItem[arrItem.length-1]

            divContacts.innerHTML = ''
            let arrFio = arrClients[index].fio.split(' ')
            console.log(arrFio)
            inputSurname.value = arrFio[0]
            inputName.value = arrFio[1]
            inputPostName.value = arrFio[2]

            for(let contact of arrClients[index].contacts){
                let divContact = createItemContact()
                divContact.querySelector('.select-contact').value = contact.type
                divContact.querySelector('.input-contact').value = contact.value
                
                divContacts.append(divContact)
                let removeContacts1 = formChange.querySelectorAll('.closeContact')
                console.log('удалить',removeContacts1.length)
                if(removeContacts1.length > 10){btnAddContacts.style.display = 'none'}
                else{btnAddContacts.style.display = 'flex'}
                


            }
            // console.log(arrItem1[arrItem1.length-1])
            formChange.style.display = 'flex'
            formChange.querySelector('.text-title').innerHTML = `ID: ${index}`
            // const allItems = divContacts.querySelectorAll('.item-contact')


            btnAddContacts.onclick = ()=>{
                const divContact = createItemContact()
                
                
                divContacts.append(divContact)
                let allItems = divContacts.querySelectorAll('.item-contact')
                if(allItems){
                    if(allItems.length > 9){
                        btnAddContacts.style.display = 'none'
                    } 
                }
                let removeContacts = formChange.querySelectorAll('.closeContact')
                for(let removeContact of removeContacts){
                    removeContact.onclick = ()=>{   
                        removeContact.parentElement.remove()
                        let removeContacts1 = formChange.querySelectorAll('.closeContact')
                        console.log('удалить', removeContacts1)
                        if(removeContacts1.length < 10){btnAddContacts.style.display = 'flex'}
                    }
                }
            }
            let removeContacts = formChange.querySelectorAll('.closeContact')
            for(let removeContact of removeContacts){
                removeContact.onclick = ()=>{
                    
                    removeContact.parentElement.remove()
                    let removeContacts1 = formChange.querySelectorAll('.closeContact')
                    console.log('удалить',removeContacts1.length)
                    if(removeContacts1.length < 10){btnAddContacts.style.display = 'flex'}
                }
            }
            


            close.onclick = ()=>{
                console.log('закрыли окно')
                formChange.style.display = "none" 
                divContacts.innerHTML = ''
            }
            deleteClient.onclick = ()=>{
                divContacts.innerHTML = ''
                let newList = arr.filter(obj => obj.id !== arr[index].id);
                for(let i=0; i<newList.length; i++){
                    newList[i].id = i
                }
                localStorage.setItem('client', JSON.stringify(newList))
                fillTable(newList)
                formChange.style.display = 'none'
            }

        }
        //Окончательное удаление
        if(String(item.className).includes('btn-delete')){
            console.log('нажали удалить')
            arrItem = item.className.split(' ')
            index = arrItem[arrItem.length-1]
            formDelete.style.display = 'flex'

 
        }
        deleteBtnEnd.onclick = ()=>{
                let newList = arr.filter(obj => obj.id !== arr[index].id);
                for(let i=0; i<newList.length; i++){
                    newList[i].id = i
                }
                localStorage.setItem('client', JSON.stringify(newList))
                fillTable(newList)
                formDelete.style.display = 'none'
        }
        changeBtnEnd.onclick = ()=>{
            changeClient(index)
        }
            


    }

    let column = 'fio'
    let columnDir = true
    
    function render(){
        let arrClients = JSON.parse(localStorage.getItem('client'))
        let arrClientsCopy = [...arrClients]
        arrClientsCopy = sortClients(arrClientsCopy,column,columnDir)
        fillTable(arrClientsCopy)
    }
        const allTh = document.querySelectorAll('th')
        for(let item of allTh){
            item.addEventListener('click',()=>{
                console.log('нажали на ', item)
                console.log(item.querySelector('img'))

                if(item.className){
                    column =  item.className
                    columnDir = !columnDir
                    console.log('направление', columnDir) 
                    item.querySelector('img').src = `img/${columnDir} vector.svg`
                    // console.log(column)

                    render()
                }
            })
        }
        console.log(allTh)

        
            
}

forForm()




