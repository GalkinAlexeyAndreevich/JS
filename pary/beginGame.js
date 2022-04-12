export function BeginGame(){
    const divBegin = document.createElement("div")
    const divTime = document.createElement("div")
    const pdivBegin = document.createElement("p")
    const pdivTime = document.createElement("p")
    const initialValues = document.createElement("div")
    const form = document.createElement('form');
    const inputBegin = document.createElement("input")
    const inputTime = document.createElement("input")
    const btnBegin = document.createElement("button")
    

    initialValues.classList.add("divBegin")
    form.classList.add("formBegin")
    inputBegin.classList.add("input")
    inputTime.classList.add("input")
    btnBegin.classList.add("btnBegin")

    pdivBegin.textContent = "Кол-во пар "
    pdivTime.textContent = "Время"
    inputBegin.placeholder = "Сколько пар хотите найти"
    inputTime.placeholder = "Сколько вам нужно секунд"
    btnBegin.textContent = "начать игру"

    divBegin.append(pdivBegin,inputBegin)
    divTime.append(pdivTime,inputTime)
    form.append(divBegin,divTime)
    form.append(btnBegin)
    
    initialValues.append(form)
    return {form,inputBegin,inputTime,initialValues}
}