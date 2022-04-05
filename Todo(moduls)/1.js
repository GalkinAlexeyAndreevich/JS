// (function(){
//     "use strict"
//     //  let MyTodoArray = [
//     //     {
//     //         name:"Помыть посуду",
//     //         done: true
//     //     },
//     //     {
//     //         name:"Выкинуть мусор",
//     //         done: false
//     //     },
//     //     {
//     //         name:"Д/з",
//     //         done: true
//     //     }
//     // ]
//     // window.MyTodoArray = MyTodoArray

//     let localArr = []
//     window.localArr = localArr

//     function createAppTitle(title){
//         const appTitle = document.createElement('h1');

//         appTitle.innerHTML = title;
//         appTitle.style.textAlign = "center"

//         return appTitle;
//     }
    
//     function createTodoItemForm(){
//         const form = document.createElement('form');
//         const input = document.createElement('input');
//         const addButton = document.createElement('button');
//         const divBtn = document.createElement('div');
    
//         addButton.disabled = !input.value.trim().length;

//         input.addEventListener('input', () => {
//             addButton.disabled = !input.value.trim().length;
//         });

//         input.placeholder = 'Введите название дела';
//         addButton.textContent = 'Добавить дело';

//         form.classList.add('input-group', 'mb-3')
//         input.classList.add('form-control');
//         addButton.classList.add('btn', 'btn-primary');
//         divBtn.classList.add('input-group-append');
       
//         divBtn.append(addButton);
//         form.append(input);
//         form.append(divBtn);
    
//         return {
//             form,
//             input,
//             addButton
//         }
//     }
//     function createTodoList(){
//         const list = document.createElement('ul');

//         list.classList.add("ul")
//         list.classList.add('list-group');
//         list.style.listStyleType = "none"

//         return list
//     }
    
//     function createTodoItem(input_value){
//         const todoItem = document.createElement('li');
//         const divBtn = document.createElement('div');
//         const doneBtn = document.createElement('button');
//         const deleteBtn = document.createElement('button');
//         todoItem.id = Math.random().toFixed(3)
        
//         todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
//         todoItem.textContent = input_value

//         doneBtn .textContent = "Готово"
//         deleteBtn.textContent = "Удалить"
        
//         doneBtn.classList.add('btn', 'btn-success');
//         deleteBtn.classList.add('btn', 'btn-danger');
    
//         divBtn.classList.add('done')
//         divBtn.append(doneBtn);
//         divBtn.append(deleteBtn);
//         todoItem.append(divBtn);

//         return {
//             todoItem,
//             doneBtn,
//             deleteBtn,
//             divBtn
//         }
    
//     }
//     function changeItemDone(arr, item){
//         arr.map(obj => {
//             if (obj.id === item.id & obj.done === false) {
//                 console.log("теперь true")
//                 obj.done = true;
//             } else if (obj.id === item.id & obj.done === true) {
//                 console.log("теперь false")
//                 obj.done = false;
//             }
//         });
//     }
//     function doneTodoItem(btn,item){
//         btn.addEventListener('click', ()=>{
//             localArr = JSON.parse(localStorage.getItem(key));
//             item.classList.toggle('list-group-item-success');
//             changeItemDone(localArr, item);
    
//             localStorage.setItem(key, JSON.stringify(localArr))
//         })
//     }
//     function deleteTodoItem(btn,item){
//         btn.addEventListener("click", ()=>{
//             if (confirm("Вы уверены, что хотите удалить запись?")){
//                 localArr = JSON.parse(localStorage.getItem(key));

//                 const newList = localArr.filter(obj => obj.id !== item.id);
//                 localStorage.setItem(key, JSON.stringify(newList));
                
//                 item.remove()
//             }
//         })
//     }
//     function createTodoApp(container, title,localArr, key) {
//         const appTitle = createAppTitle(title);
//         const appForm = createTodoItemForm();
//         const appList = createTodoList();

//         container.append(appTitle, appForm.form, appList);

//         if (localStorage.getItem(key)) {
//             localArr = JSON.parse(localStorage.getItem(key));

//             for (let obj of localArr){
//                 const todoItem = createTodoItem(obj.name)
//                 todoItem.todoItem.id = obj.id
//                 if(obj.done == true){
//                     todoItem.todoItem.classList.add('list-group-item-success')
//                 }
//                 else if(obj.done == false){
//                     todoItem.todoItem.classList.remove('list-group-item-success') 
//                 }

//                 doneTodoItem(todoItem.doneBtn,todoItem.todoItem)
//                 deleteTodoItem(todoItem.deleteBtn,todoItem.todoItem)

//             appList.append(todoItem.todoItem)
//             todoItem.todoItem.append(todoItem.divBtn)
//             }
//         }
//         appForm.form.addEventListener('submit', e => {
//             e.preventDefault();
//             const todoItem = createTodoItem(appForm.input.value);

//             if(appForm.input.value.trim().length == 0){
//                 return
//             }

//             doneTodoItem(todoItem.doneBtn,todoItem.todoItem)
//             deleteTodoItem(todoItem.deleteBtn,todoItem.todoItem)

//             localArr = JSON.parse(localStorage.getItem(key)) || localArr

//             function createItemObject(arr){
//             const obj = {}
//             obj.id = todoItem.todoItem.id
//             obj.name = appForm.input.value
//             obj.done = false
//             arr.push(obj)
//             }

//             createItemObject(localArr)

//             localStorage.setItem(key, JSON.stringify(localArr))
//             console.log(JSON.parse(localStorage.getItem(key)))

//             appList.append(todoItem.todoItem);
//             appForm.input.value = '';
//             appForm.addButton.disabled = !appForm.addButton.disabled;

//         }) 

//     }
//     window.createTodoApp = createTodoApp;
// })();