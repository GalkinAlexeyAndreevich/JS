import { createNumber, RandArr } from "./randArr.js"
import { createCard } from "./createCard.js"
// import { BeginGame } from "./beginGame.js"
import { gameOver } from "./gameOver.js"
const mainContainer = document.querySelector(".game")
const container = document.querySelector(".playingField")
let massNum = []
let amount =false
let repeat
let numbersFound = 0
let n
let time1
let timer
let beginTimer = false
const Begin = BeginGame(mainContainer)
function BeginGame(container){
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

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        n = Begin.inputBegin.value
        if(!Number(n)){
            alert("Введите число")
            return
        }
    
        massNum =  createNumber(massNum, n)
        RandArr(massNum)
        createCard(n*2,container)
        let allBtn = document.querySelectorAll(".btnNum")
        console.log(massNum)
        for(let text of allBtn){
            text.textContent = "Js"
            text.classList.remove("completeCard")
            text.classList.remove("closeBtn")
            amount = false
        }
        Begin.initialValues.classList.add("close")
        const gameEnd = gameOver(container)
        gameEnd.addEventListener("click",()=>{
            container.innerHTML = ""
            Begin.inputBegin.value = null
            Begin.initialValues.classList.remove("close")
        })
    })
    
    form.append(inputBegin)
    form.append(btnBegin)
    initialValues.append(form)
    container.append(initialValues)
    return {form,inputBegin,initialValues}
}

container.addEventListener('click',(e)=>{
    let allBtn = document.querySelectorAll(".btnNum")
    let item = e.target.closest(".btnNum")
    for(let i = 0; i<allBtn.length;i++){
        if(item == allBtn[i]){
            if(beginTimer == false){
                beginTimer = true
                const timerText = document.createElement("p")
                timerText.textContent = "10"
                container.append(timerText)
                timer = setInterval(() => {
                    if(timerText.textContent == 0){
                        clearInterval(timer)
                        alert("Время вышло")
                        container.innerHTML = ""
                        BeginGame(mainContainer)
                        console.log("Открыть начальное поле")
                        
                        return
                    }
                    timerText.textContent -=1
                }, 1000);
            }

            
            item.classList.add("closeBtn")
            item.textContent = massNum[i]

            
			if(amount){
                for(let i = 0; i<allBtn.length; i++){
                    allBtn[i].classList.add("closeBtn")
                }
                clearTimeout(time1)
                time1 =setTimeout(()=>{
				    if(item.textContent == repeat.textContent){
                        item.classList.add("completeCard")
                        repeat.classList.add("completeCard")
                        numbersFound+=1
                        if(numbersFound == n){
                            setTimeout(()=>{alert("Вы выиграли")}, 10);
                            
                        }
				    }

				    else{
                        item.textContent = "Js"
                        repeat.textContent= "Js"

                    }
                 
                    for(let i = 0; i<allBtn.length; i++){
                        if(allBtn[i].textContent == "Js"){
                            allBtn[i].classList.remove("closeBtn")
                        }
                    }
				},1000)


                amount=false

				
			}
			
			else{
                amount=true
				repeat = item
			}
		}

	}
})