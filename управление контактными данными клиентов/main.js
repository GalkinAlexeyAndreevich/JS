import {Client} from './client.js'
import {createHeader} from './modules/createHeader.js'
import {buildTable} from './modules/buildTable.js'
import {newClientRow} from './modules/newRow.js'
import { formAddClient } from './modules/formAddClient.js'


const body = document.body
const header = createHeader()
const main = document.createElement('main')

body.append(header)
body.append(main)

const title = document.createElement('h1')
title.textContent = 'Клиенты'
title.classList.add('title')
main.append(title)


const table = buildTable()
table.classList.add('table')
main.append(table)

const addClientDiv = document.createElement('div')
addClientDiv.classList.add('addClientDiv')
const addClientBut = document.createElement('button')
addClientBut.classList.add('addClientBut')

addClientBut.innerHTML = `
<img src='img/addClient.svg' class = "button butChange" alt="">Добавить клиента
`

const formAdd = formAddClient()
body.append(formAdd)
formAdd.classList.add('off-display')
addClientDiv.addEventListener('click',()=>{
    console.log(1234)
    formAdd.style.display = 'flex'
})

addClientDiv.append(addClientBut)
main.append(addClientDiv)

let arrClients = [new Client(
    123455,
    'Скворцов Денис Юрьевич',
    new Date('2021.02.21 12:41'),
    new Date('2021.02.21 14:50'),
    'Пока ничего нет',
    'Тоже ничего нет'

)]

let row = newClientRow(arrClients[0])
table.lastChild.append(row)
