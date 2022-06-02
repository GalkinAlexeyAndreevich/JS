import { fillTable } from "./fillTable.js"
    let arrItem = []
    let index = ''
export function deleteForm(){
    const formDelete = document.querySelector(".modal-delete")
    const close = formDelete.querySelector(".form-close")
    const deleteBtnEnd = formDelete.querySelector(".form-btn")
    const tableBody = document.querySelector('tbody')
    const tableBtn = tableBody.querySelectorAll('.table_btn')
    
    

    for(let item of tableBtn){ 
        let deleteBtn = item.querySelector('.btn-delete')
        console.log(deleteBtn)
        deleteBtn.addEventListener('click',()=>{       
            arrItem = deleteBtn.className.split(' ')
            index = arrItem[arrItem.length-1]
            console.log('bnjuj', index)
            formDelete.style.display = 'flex'
        })
        deleteBtnEnd.addEventListener('click',()=>{
            let arrClients = JSON.parse(localStorage.getItem('client')) || []
            console.log(index)
            console.log(arrClients)
            console.log(arrClients[index])
            // let newArr1 = []
            // console.log(arrClients)
            // // console.log(arrClients[index].id)
            // for(let i=0; i< arrClients.length; i++){
            //     // console.log(arrClients[i])
            //     if(arrClients[index] != arrClients[i]){
            //         newArr1.push(arrClients[i])
            //     }
            //     // if(!(arrClients[i].id == arrClients[index].id)){
                    
            //     // }
            //     // else{
            //     //     console.log('Что удалять', arrClients[i])
            //     // }
                
            // }
            let newList = arrClients.filter(obj => obj.id !== arrClients[index].id );
            console.log('массив после удаления', newList)
            // for(let i=0; i<newList.length; i++){
            //     newList[i].id = i
            // }
            // localStorage.setItem('client', JSON.stringify(newList))
            // fillTable(newList)
            // formDelete.style.display = 'none'
            // return
            // deleteForm()
        })
        
    }

    close.addEventListener('click',()=>{
        formDelete.style.display = "none" 
    })

    //     if(String(item.className).includes('btn-delete')){
    //         console.log('нажали удалить')
    //         arrItem = item.className.split(' ')
    //         index = arrItem[arrItem.length-1]
    //         formDelete.style.display = 'flex'

 
    //     }
    //     deleteBtnEnd.addEventListener('click',()=>{
    //             let newList = arr.filter(obj => obj.id !== arr[index].id);
    //             for(let i=0; i<newList.length; i++){
    //                 newList[i].id = i
    //             }
    //             localStorage.setItem('client', JSON.stringify(newList))
    //             fillTable(newList)
    //             formDelete.style.display = 'none'
    //     })
    //     changeBtnEnd.addEventListener('click',()=>{
    //         changeClient(arr, index)
    //     })
}
