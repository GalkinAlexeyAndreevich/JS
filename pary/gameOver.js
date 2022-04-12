export function gameOver(){
    const btnEnd = document.createElement("button")
    btnEnd.textContent = "Закончить игру"
    btnEnd.classList.add("btnEnd")
    return btnEnd
}