import {addRow} from './addRow.js'
export function fillTable(arr){
    const tableBody = document.querySelector("tbody")
    tableBody.innerHTML = ''
    for(let i=0; i<arr.length; i++){
        // console.log(1)
        let row = addRow(arr[i])
        tableBody.append(row)  
    } 
}