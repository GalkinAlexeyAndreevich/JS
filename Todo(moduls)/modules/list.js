export function createTodoList(){
    const list = document.createElement('ul');

    list.classList.add("ul")
    list.classList.add('list-group');
    list.style.listStyleType = "none"

    return list
}