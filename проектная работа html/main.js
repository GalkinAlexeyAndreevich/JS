import {Client} from './modules/client.js'
import {newClientRow} from './modules/newRow.js'
let arr = []
const addClient = document.querySelector('.add-client')
const changeBtn = document.querySelector('.btn-change')

const backgroundFormAdd = document.querySelector('.background-form-add')
const backgroundFormChange = document.querySelector('.background-form-change')
const backgroundFormDelete = document.querySelector('.background-form-delete')

const closeBtnAdd = document.querySelector('.close')
const closeBtnChange = document.querySelector('.close-change')
const closeBtnDelete = document.querySelector('.close-delete')
const deleteBtn = document.querySelector('.btn-delete')

const addContact = document.querySelector('.add-contact-change')
const textHidden = document.querySelector('.hidden-text')
const closeContact = document.querySelector('.close-add-contact')

console.log()

// const addForm = document.querySelector('.form-add-client')
const addClientBtn = document.querySelector('.save-add-client')
const table = document.querySelector('.table')
const tableBody = document.querySelector('.tbody')



console.log(table )


console.log(tableBody)


addClient.addEventListener('click',()=>{
    backgroundFormAdd.classList.remove('off-display')
})
closeBtnAdd.addEventListener('click',()=>{
    backgroundFormAdd.classList.add('off-display')
})
closeBtnChange.addEventListener('click',()=>{
    backgroundFormChange.classList.add('off-display')
})
changeBtn.addEventListener('click',()=>{
    backgroundFormChange.classList.remove('off-display')
})

deleteBtn.addEventListener('click',()=>{
    backgroundFormDelete.classList.remove('off-display')
    const deleteEndClient = document.querySelector('.delete-client-end')
    deleteEndClient.addEventListener('click',()=>{
        console.log('нажали', deleteBtn.parentNode)
        deleteBtn.parentElement.parentElement.parentElement.parentElement.remove()
    })


})

closeBtnDelete.addEventListener('click',()=>{
    backgroundFormDelete.classList.add('off-display')
})

addContact.addEventListener('click',()=>{
    textHidden.classList.remove('off-display')
})

closeContact.addEventListener('click',()=>{
    textHidden.classList.add('off-display')
})

addClientBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const inputSurname = document.querySelector('.add-surname')
    const inputName = document.querySelector('.add-name')
    const inputLastname = document.querySelector('.add-lastname')

    const surname = inputSurname.value.trim()
    const name = inputName.value.trim()
    const lastname = inputLastname.value.trim()
    if(!( surname && name)){
        alert('заполните обязательные поля')
        return
    }
    const fio = surname + " " +  name + " " + lastname
    arr.push(new Client(arr.length, fio, new Date(), new Date(), 'Пока ничего'))
    let row = newClientRow(arr[arr.length-1])
    tableBody.append(row)

    inputSurname.value = ''
    inputName.value = ''
    inputLastname.value = ''
})

// function 













