export function formAddClient(){
    const mainDiv = document.createElement('form')
    const modalForm = document.createElement('div')
    const headerDiv = document.createElement('div')
    const modalDiv = document.createElement('div')

   

    mainDiv.classList.add('mainDiv')
    mainDiv.classList.add('block__center')

    modalForm.classList.add('modalForm')
    headerDiv.classList.add('headerDiv')
    modalDiv.classList.add('modalDiv')


    const title = document.createElement('h1')
    title.textContent = 'Новый клиент'

    const closeLink = document.createElement('a')
    const close = document.createElement('img')
    closeLink.href = '#'
    closeLink.classList.add('close__img')
    close.src = 'img/close.svg'
    closeLink.append(close)

    headerDiv.append(title, closeLink)

    closeLink.addEventListener('click',()=>{
        mainDiv.style.display = 'none'
    })


    const inputSurname = document.createElement('input')
    const inputName = document.createElement('input')
    const inputLastName = document.createElement('input')

    inputSurname.placeholder = 'Фамилия'
    inputName.placeholder = 'Имя'
    inputLastName.placeholder = 'Отчество'


    const butAddContact = document.createElement('button')
    const butSave = document.createElement('button')
    const butCancel = document.createElement('button')

    butAddContact.classList.add('butAddContact')
    butSave.classList.add('butSave')
    butCancel.classList.add('butCancel')


    butAddContact.innerHTML = `
    <img src='img/addContact.svg' class = "button butAddContact" alt="">Добавить контакт
    `
    butSave.textContent = 'Сохранить'
    butCancel.textContent = 'Отмена'


    modalDiv.append(inputSurname,inputName,inputLastName,butAddContact,butSave,butCancel)
    
    modalForm.append(headerDiv, modalDiv)
    mainDiv.append(modalForm)
    return mainDiv
}
