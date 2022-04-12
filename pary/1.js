import { createCard } from "./createCard.js"
import { createNumber, RandArr } from "./randArr.js"
import { BeginGame } from "./beginGame.js"
import { gameOver } from "./gameOver.js"
const mainContainer = document.querySelector(".game")
const container = document.querySelector(".playingField")
let massNum = []
let amount =false
let repeat
let numbersFound = 0
let n
let timer
let time
let timer1
let beginTimer = false

function createField(){
    massNum = createNumber(massNum, n)
    RandArr(massNum)
    createCard(n*2,container)
    console.log(massNum)
}

function secondCard(item,repeat){
    let allBtn = document.querySelectorAll(".btnNum")
    for(let i = 0; i<allBtn.length; i++){
        allBtn[i].classList.add("closeBtn")
    }
    clearTimeout(timer)
    timer =setTimeout(()=>{
        if(item.textContent == repeat.textContent){
            item.classList.add("completeCard")
            repeat.classList.add("completeCard")
            numbersFound+=1
            if(numbersFound == n){
                
                setTimeout(()=>{alert("Вы выиграли")}, 10);
                clearGameField()
                
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
}




const Begin = BeginGame()
const gameEnd = gameOver()

mainContainer.append(Begin.initialValues)
Begin.form.addEventListener('submit', (e)=>{
    e.preventDefault();
    n = Begin.inputBegin.value
    time = Begin.inputTime.value
    if(!Number(n)){
        alert("Введите число")
        return
    }
    if(!Number(time) && time){
        alert("Введите число")
        return
    }
    createField()
    Begin.initialValues.classList.add("close")
    container.append(gameEnd)
})
    
gameEnd.addEventListener("click",()=>{
    clearGameField()
})




container.addEventListener('click',(e)=>{
    let allBtn = document.querySelectorAll(".btnNum")
    let item = e.target.closest(".btnNum")
    for(let i = 0; i<allBtn.length;i++){
        if(item == allBtn[i]){

            item.textContent = massNum[i]
            item.classList.add("closeBtn")
			if(amount){
                secondCard(item,repeat)
                amount=false
			}
			
			else{
                amount=true
				repeat = item
			}
            if(beginTimer == false){
                if(time){gameTimer(time)}
                else{gameTimer()}
                beginTimer = true
            }


		}

	}
})
function clearGameField(){
    let allBtn = document.querySelectorAll(".btnNum")
    clearInterval(timer1)
    amount = false
    beginTimer = false
    numbersFound = 0
    container.innerHTML = ""
    Begin.inputBegin.value = null
    Begin.initialValues.classList.remove("close")
    for(let text of allBtn){
        text.textContent = "Js"
        text.classList.remove("completeCard")
        text.classList.remove("closeBtn")
        
    }
}
function gameTimer(time = 10){
    console.log(time)
    const timerText = document.createElement("p")
    timerText.textContent = time
    container.append(timerText)
    timer1 = setInterval(() => {
        if(timerText.textContent == 0){
            alert("Время вышло")
            clearGameField()
            return
        }
        else{
          timerText.textContent -=1  
        }
        
    }, 1000);
}
