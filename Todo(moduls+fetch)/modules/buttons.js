"use strict"
import {changeItemDone} from "./changeColor.js"

export function doneTodoItem(btn,item,data,key =""){
    btn.addEventListener('click', ()=>{
        item.classList.toggle('list-group-item-success');
        changeItemDone(data, item);
        for(let obj of data){
            // console.log(obj)
            if(obj.owner != key) continue
            requestChangeColor(obj)
        }
    })
}
async function requestChangeColor(obj){
    let request = await fetch("http://localhost:3000/api/todos" +"/"+ obj.id, {
        method: "PATCH",
        body: JSON.stringify({
        done:obj.done
        }),
    });
    let answer = request.json()
    console.log(answer)
}
async function requestDeleteTodoItem(item){
    console.log(item)
    let request = await fetch("http://localhost:3000/api/todos" +"/"+ item, {
        method: "DELETE",
    });
    let answer = request.json()
    console.log(answer) 
}
export function deleteTodoItem(btn,item){
    btn.addEventListener("click", ()=>{
        if (confirm("Вы уверены, что хотите удалить запись?")){
            requestDeleteTodoItem(item.id)
            item.remove() 
        }
    })
}