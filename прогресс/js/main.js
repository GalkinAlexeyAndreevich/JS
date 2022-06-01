import {createUser} from './module/createUser.js'
import { fillTable } from "./module/fillTable.js";
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

    const divContacts = document.querySelectorAll(".add-contacts-div")
    const btnAddContacts = document.querySelectorAll(".btn-form-cont")


    // console.log('Что в итоге', divContact)
    for(let i=0; i<btnAddContacts.length; i++){
        btnAddContacts[i].addEventListener('click',()=>{
            const divContact = document.createElement('div')
            divContact.classList.add('item-contact')
            divContact.innerHTML = '1'
            console.log('нажали', btnAddContacts[i])
            const allItems = divContacts[i].querySelectorAll('.item-contact')
            if(allItems){
                console.log(allItems.length)
                if(allItems.length > 10){
                    btnAddContacts[i].style.display = 'none'
                } 
            }

            divContacts[i].append(divContact)

        })
    }
    console.log(changeBtnEnd)
    const body = document.body
    function getFromLocal(){
        let arr = JSON.parse(localStorage.getItem('client'))
        if(!arr){
            console.log('локалка пуста')
            arr = []
            let obj = {
                id:0,
                fio:'Скворцов Денис Юрьевич',
                // surname:'Скворцов',
                // name: 'Денис',
                // postName:'Юрьевич',
                dataCreate:new Date().toLocaleDateString(),
                timeCreate:new Date().toLocaleTimeString().slice(0,5),
                dataChange:new Date().toLocaleDateString(),
                timeChange:new Date().toLocaleTimeString().slice(0,5),
                fullDateCreate:new Date(),
                fullDateChange:new Date()

            }
            arr.push(obj)
            console.log(arr) 
            localStorage.setItem('client', JSON.stringify(arr)) 
        }
        fillTable(arr)
    }
    getFromLocal()


    btnAddUser.addEventListener("click", ()=>{
        formAddUser.style.display = "flex"
    })

    btnAddCont.addEventListener("click", (e)=>{
        e.preventDefault()
        createUser()
    })

    function closeForm(){
        let mass = [formAddUser, formChange, formDelete]
        for(let i = 0; i < cross.length;i++){
            cross[i].addEventListener("click", ()=>{
                mass[i].style.display = "none"
                
            })
            mass[i].addEventListener("click", (e) => {
                const wind = e.target.closest(".modal__inner");
              
                if (!wind) {
                  mass[i].style.display = "none";
                  body.classList.remove("noscroll");
                }
              });

        }
    }


    closeForm()

    let index = ''
    tableBody.addEventListener('click', (e)=>{
        e.preventDefault()
        let arr = JSON.parse(localStorage.getItem('client'))
        console.log(arr)
        let item = e.target
        let arrItem = item.className.split(' ')
        console.log(item)
        if(String(item.className).includes('btn-change')){
            console.log('нажали изменить')
            arrItem = item.className.split(' ')
            index = arrItem[arrItem.length-1]
            // console.log(arrItem1[arrItem1.length-1])
            formChange.style.display = 'flex'
        }
        if(String(item.className).includes('btn-delete')){
            console.log('нажали удалить')
            arrItem = item.className.split(' ')
            index = arrItem[arrItem.length-1]
            formDelete.style.display = 'flex'

 
        }
        deleteBtnEnd.addEventListener('click',()=>{
                let newList = arr.filter(obj => obj.id !== arr[index].id);
                for(let i=0; i<newList.length; i++){
                    newList[i].id = i
                }
                localStorage.setItem('client', JSON.stringify(newList))
                fillTable(newList)
                formDelete.style.display = 'none'
        })
        changeBtnEnd.addEventListener('click',()=>{
            const inputSurname = document.querySelector(".change-surname")
            const inputName= document.querySelector(".change-name")
            const inputPostName = document.querySelector(".change-postName")

            let fio = inputSurname.value + ' ' + inputName.value + ' ' + inputPostName.value
            arr[index].fio = fio
            arr[index].dataChange = new Date().toLocaleDateString(),
            arr[index].timeChange = new Date().toLocaleTimeString().slice(0,5),
            arr[index].fullDateChange = new Date()
            localStorage.setItem('client', JSON.stringify(arr))
            fillTable(arr)
            formChange.style.display = 'none'
        })
            


    })
    function sortClients(arr,prop,dir){
        const arrClientsCopy = [...arr]
        return arrClientsCopy.sort(function(clientA, clientB){
            if(dir?clientA[prop] <  clientB[prop]:clientA[prop] > clientB[prop])
            return -1
        })
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
                if(item.className){
                    column =  item.className
                    // console.log(column)
                    columnDir = !columnDir
                    console.log('направление', columnDir) 
                    render()
                }
            })
        }
        console.log(allTh)

        
            
}

forForm()




