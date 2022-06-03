import { fillTable } from "./module/fillTable.js";
const divInput = document.querySelector(".div-input")
const input = divInput.querySelector(".header-input")

console.log(divInput)


function createDataList(){
    let arrClients = JSON.parse(localStorage.getItem('client'))
    const datalist = document.createElement('datalist')
    datalist.id="filter"
    for(let item of arrClients){
        const option = document.createElement('option')
        option.value = item.fio
        datalist.append(option)
    }
    console.log(datalist)
    return datalist
}
const dataList = createDataList()
divInput.append(dataList)
// input.list = 'filter'
console.log(input.list)

// {/* <datalist id="client-fio">
//     <option value="Chocolate">
//     <option value="Coconut">
//     <option value="Mint">
//     <option value="Strawberry">
//     <option value="Vanilla">
// </datalist> */}
    input.addEventListener('input',()=>{
        setTimeout(()=>{
            let arrClients = JSON.parse(localStorage.getItem('client'))
            let value = input.value
            let newArr = filter(arrClients,'fio',value)
            fillTable(newArr)
        }, 700)

    })
function filter(arr,prop,value){
    let result = []
    let copy = [...arr]
    for(const item of copy){
        if(prop == "fio"){
            if(String(item.fio).includes(value) == true){
                result.push(item)
            }
        }


    }
    return result
}