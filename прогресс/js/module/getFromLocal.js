import { fillTable } from "./fillTable.js"
export function getFromLocal(){
    let arr = JSON.parse(localStorage.getItem('client'))
    if(!arr){
        console.log('локалка пуста')
        arr = []
        let arrContacts = [{ 
            type:'vk',
            value:'jdsgh'
        }]
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
            fullDateChange:new Date(),
            contacts:arrContacts

        }
        arr.push(obj)
        console.log(arr) 
        localStorage.setItem('client', JSON.stringify(arr)) 
    }
    fillTable(arr)
}