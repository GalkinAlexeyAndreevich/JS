export function createTodoItemForm(){
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

    form.classList.add('input-group', 'mb-3')
    input.classList.add('form-control');
    addButton.classList.add('btn', 'btn-primary');
    divBtn.classList.add('input-group-append');
   
    divBtn.append(addButton);
    form.append(input);
    form.append(divBtn);

    return {
        form,
        input,
        addButton
    }
}