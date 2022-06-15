export function createTodoItem(input_value = ""){
    const todoItem = document.createElement('li');
    const divBtn = document.createElement('div');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    todoItem.id = Math.random().toFixed(3)
    
    todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    todoItem.textContent = input_value

    doneBtn .textContent = "Готово"
    deleteBtn.textContent = "Удалить"
    
    doneBtn.classList.add('btn', 'btn-success');
    deleteBtn.classList.add('btn', 'btn-danger');

    divBtn.classList.add('done')
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