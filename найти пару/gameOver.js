export function gameOver(container){
    const btnEnd = document.createElement("button")
    btnEnd.textContent = "Закончить игру"
    container.append(btnEnd)
    return btnEnd
}