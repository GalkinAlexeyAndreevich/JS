export function buildTable() {
    const arrHead1 = ['ID','Фамилия Имя Отчество','Дата и время создания','Последние изменения', 'Контакты ', 'Действия']
    const arrHead2 = ["id", "fio","dataCreate","lastChange","contacts", 'doing']
    
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    table.innerHTML = ""
    table.appendChild(thead);
    table.appendChild(tbody);

    for(let i = 0; i<arrHead1.length; i++){
        const cell = document.createElement("th")
        cell.textContent = arrHead1[i]
        cell.classList.add(arrHead2[i])
        thead.append(cell)
    }

    return table
}