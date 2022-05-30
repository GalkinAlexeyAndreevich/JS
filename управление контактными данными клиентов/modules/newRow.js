export function newClientRow(obj){
    const row = document.createElement('tr')
    const idCell = document.createElement('td')
    const fioCell = document.createElement('td')
    const dataCreateCell = document.createElement('td')
    const lastChangeCell = document.createElement('td')
    const contactsCell = document.createElement('td')
    const doingCell = document.createElement('td')


    idCell.textContent = obj.id
    fioCell.textContent = obj.fio
    dataCreateCell.textContent = obj.getDataCreate()
    lastChangeCell.textContent = obj.getLastChange()
    contactsCell.textContent = obj.contacts

    const butChange = document.createElement('button')
    const butDelete = document.createElement('button')

    butChange.classList.add('butChange')
    butDelete.classList.add('butDelete')

    butChange.innerHTML = `
    <img src='img/change.svg' class = "button butChange" alt="">Изменить
    `
    butDelete.innerHTML = `
    <img src='img/delete.svg' class = "button butChange" alt="">Изменить
    `
    

    doingCell.append(butChange,butDelete)

    row.append(idCell,fioCell,dataCreateCell,lastChangeCell,contactsCell,doingCell)
    return row
} 