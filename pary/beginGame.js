export function BeginGame(container){
    const initialValues = document.createElement("div")
    const form = document.createElement('form');
    const inputBegin = document.createElement("input")
    const btnBegin = document.createElement("button")


    initialValues.classList.add("divBegin")
    form.classList.add("formBegin")
    inputBegin.classList.add("inputBegin")
    btnBegin.classList.add("btnBegin")

    inputBegin.placeholder = "Сколько пар хотите найти"
    btnBegin.textContent = "начать игру"

    form.append(inputBegin)
    form.append(btnBegin)
    initialValues.append(form)
    container.append(initialValues)
    return {form,inputBegin,initialValues}
}