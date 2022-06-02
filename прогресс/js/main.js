import {createUser} from './module/createUser.js'
import { fillTable } from "./module/fillTable.js";
import {sortClients} from "./module/sort.js";
import {contactsForm} from "./module/contactsForm.js";
import {getFromLocal} from "./module/getFromLocal.js";
import {changeClient} from "./module/changeClient.js";
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



    formAddUser.addEventListener('click',()=>{
        const closeContacts = document.querySelectorAll(".closeContact")

        for(let item of closeContacts){
            item.addEventListener('click', ()=>{
                console.log('удалить')
                console.log(item.parentElement)
                item.parentElement.remove()
                formAddUser.style.display = 'flex'
            })
        } 
    })


    contactsForm()
    getFromLocal()

    // const icons = document.querySelectorAll('.icons')
    //  for(let icon of icons){
    //     console.log(icon)
    //     icon.addEventListener('click',()=>{
    //         console.log('иконка', icon.querySelector('.contact-text'))
    //         // icon.querySelector('.contact-text').classList.toggle('display-off')
    //     })
        
    //  }


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
                if(e.target.closest(".modal__inner")) return
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
        // Итоговое изменениие
        if(String(item.className).includes('btn-change')){
            console.log('нажали изменить')
            arrItem = item.className.split(' ')
            index = arrItem[arrItem.length-1]
            // console.log(arrItem1[arrItem1.length-1])
            formChange.style.display = 'flex'
            formChange.querySelector('.text-title').innerHTML = `ID: ${index}`
        }
        //Окончательное удаление
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
            changeClient(arr, index)
        })
            


    })

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




