const container = document.querySelector(".container")
function createAppTitle(){
    const appTitle = document.createElement('h1');
    appTitle.innerHTML = "To-do";
    appTitle.style.textAlign = "center"
    container.append(appTitle)
    return appTitle;
}

function createTodoForm(){
    const form = document.createElement('form');
    const input = document.createElement('input');
    const addButton = document.createElement('button');
    const div = document.createElement('div');

    addButton.disabled = !input.value.length;

    input.addEventListener('input', () => {
        if (input.value.length ==0){
          addButton.disabled = true   
        }
        else{addButton.disabled = ""}
    });

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название дела';
    input.classList.add("input")
    input.type = "text"

    addButton.classList.add('btn', 'btn-primary');
    addButton.textContent = 'Добавить дело';
    addButton.type = "button"
    addButton.addEventListener("click", ()=>{
        createTodoItem()
        console.log(input.value)
    })

    div.append(addButton);
    form.append(input);
    form.append(div);
    container.append(form)

    return form, input, addButton
}
function createTodoList(){
    const list = document.createElement('ul');
    list.classList.add("ul")
    list.classList.add('list-group');
    list.style.listStyleType = "none"
    container.append(list)
}

function createTodoItem(){
    const input = document.querySelector(".input")
    const list = document.querySelector(".ul")
    const todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    todoItem.textContent = input.value
    list.append(todoItem)
    input.value = null
    
    createBtn()
    function createBtn(){
        const divBtn = document.createElement('div');
        const doneBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        doneBtn.classList.add('btn', 'btn-success');
        deleteBtn.classList.add('btn', 'btn-danger');

        doneBtn .textContent = "Готово"
        deleteBtn.textContent = "Удалить"
        divBtn.append(doneBtn, deleteBtn);
        todoItem.append(divBtn);

        deleteBtn.addEventListener("click", ()=>{
            if (confirm("Вы уверены, что хотите удалить запись?")){
                todoItem.remove()
            }
        })

        doneBtn.addEventListener('click', ()=>{
            todoItem.classList.toggle('list-group-item-success');
        })
    }
    return

}
createAppTitle();
createTodoForm();
createTodoList();