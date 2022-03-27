(function(){
    "use strict"
     let MyTodoArray = ["Помыть посуду", "Выкинуть мусор", "Д/з"]
     let SisterTodoArray = ["Приготовить еду", "Бухучёт разобрать 3 документа", "Посмотреть фильм"]

    function createAppTitle(title){
        const appTitle = document.createElement('h1');

        appTitle.innerHTML = title;
        appTitle.style.textAlign = "center"

        return appTitle;
    }
    
    function createTodoItemForm(){
        const form = document.createElement('form');
        const input = document.createElement('input');
        const addButton = document.createElement('button');
        const divBtn = document.createElement('div');
    
        addButton.disabled = !input.value.trim().length;

        input.addEventListener('input', () => {
            addButton.disabled = !input.value.trim().length;
        });

        input.placeholder = 'Введите название дела';
        addButton.textContent = 'Добавить дело';

        form.classList.add('input-group', 'mb-3');

        input.classList.add('form-control');
        input.classList.add("input")
        input.type = "text"
    
        addButton.classList.add('btn', 'btn-primary');
        addButton.type = "button"
       
        divBtn.append(addButton);
        form.append(input);
        form.append(divBtn);
    
        return {
            form,
            input,
            addButton
        }
    }
    function createTodoList(){
        const list = document.createElement('ul');

        list.classList.add("ul")
        list.classList.add('list-group');
        list.style.listStyleType = "none"

        return list
    }
    
    function createTodoItem(input_value){
        const todoItem = document.createElement('li');
        const divBtn = document.createElement('div');
        const doneBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        
        todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        todoItem.textContent = input_value

        doneBtn .textContent = "Готово"
        deleteBtn.textContent = "Удалить"
        
        doneBtn.classList.add('btn', 'btn-success');
        deleteBtn.classList.add('btn', 'btn-danger');
    
        deleteBtn.addEventListener("click", ()=>{
            if (confirm("Вы уверены, что хотите удалить запись?")){
                todoItem.remove()
            }
        })
    
        doneBtn.addEventListener('click', ()=>{
            todoItem.classList.toggle('list-group-item-success');
        })

        divBtn.append(doneBtn);
        divBtn.append(deleteBtn);
        todoItem.append(divBtn);

        return {
            todoItem,
            doneBtn,
            deleteBtn,
            divBtn
        }
    
    }
    function createTodoApp(container, title, check) {
        const appTitle = createAppTitle(title);
        const appForm = createTodoItemForm();
        const appList = createTodoList();

        if(check === "My To-do"){
            for (let i of MyTodoArray){
            console.log(i)
            const todoItem = createTodoItem(i)
            appList.append(todoItem.todoItem)
            }
        }
        if(check === "Sister To-do"){
            for (let i of SisterTodoArray){
            console.log(i)
            const todoItem = createTodoItem(i)
            appList.append(todoItem.todoItem)
            }
        }

        appForm.addButton.addEventListener("click", ()=>{
            const todoItem = createTodoItem(appForm.input.value);
            
            appList.append(todoItem.todoItem);
            appForm.input.value = '';
            appForm.addButton.disabled = !appForm.addButton.disabled;

        })
        appForm.form.addEventListener('submit', e => {
            e.preventDefault();
            const todoItem = createTodoItem(appForm.input.value);
            
            appList.append(todoItem.todoItem);
            appForm.input.value = '';
            appForm.addButton.disabled = !appForm.addButton.disabled;
        })

        container.append(appTitle, appForm.form, appList);

    }
    
    window.createTodoApp = createTodoApp;
})();