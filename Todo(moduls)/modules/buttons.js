"use strict"
import {changeItemDone} from "./changeColor.js"

export function doneTodoItem(btn,item){
    btn.addEventListener('click', ()=>{
        localArr = JSON.parse(localStorage.getItem(key));
        item.classList.toggle('list-group-item-success');
        changeItemDone(localArr, item);

        localStorage.setItem(key, JSON.stringify(localArr))
    })
}
export function deleteTodoItem(btn,item){
    btn.addEventListener("click", ()=>{
        if (confirm("Вы уверены, что хотите удалить запись?")){
            localArr = JSON.parse(localStorage.getItem(key));

            const newList = localArr.filter(obj => obj.id !== item.id);
            localStorage.setItem(key, JSON.stringify(newList));
            
            item.remove()
        }
    })
}