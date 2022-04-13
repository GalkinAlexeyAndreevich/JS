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
let proverka = true

function createField(){
    massNum = createNumber(massNum, n)
    RandArr(massNum)
    createCard(n*2,container)

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
            item.textContent = "?"
            repeat.textContent= "?"

        }
     
        for(let i = 0; i<allBtn.length; i++){
            if(allBtn[i].textContent == "?"){
                allBtn[i].classList.remove("closeBtn")
            }
        }
    },1000)
}





function checkInput(){
    if(!Number(n)){
        alert("Введите кол-во пар(число)")
        proverka =false
    }
    if(n < 0){
        alert("Введите число пар, больше 0")
        proverka =false
    }
    if(n%1 !=0){
        alert("Введите целое число пар")
        proverka =false
    }
    if(!Number(time) && time){
        alert("Введите число")
        proverka =false
    }
    if(time < 0){
        alert("Введите время больше 0")
        proverka =false
    }
    if((time%1) != 0){
        alert("Введите целое число(время)")
        proverka =false
    }
    if(!proverka){
        Begin.inputTime.value = null
        Begin.inputBegin.value = null
    }
}
const Begin = BeginGame()
const gameEnd = gameOver()

mainContainer.append(Begin.initialValues)
Begin.form.addEventListener('submit', (e)=>{
    e.preventDefault();
    n = Begin.inputBegin.value
    time = Begin.inputTime.value

    checkInput()
    if(!proverka){
        proverka = true
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
    Begin.inputTime.value = null
    Begin.initialValues.classList.remove("close")
    for(let text of allBtn){
        text.textContent = "?"
        text.classList.remove("completeCard")
        text.classList.remove("closeBtn")
        
    }
}
function gameTimer(time = 10){
    const timerText = document.createElement("p")
    timerText.textContent = time
    container.append(timerText)
    timer1 = setInterval(() => {
        if(timerText.textContent == 0){
            alert("Время вышло")
            clearGameField()
            return
        }
        else if(timerText.textContent > 0){
          timerText.textContent -=1  
        }
        
    }, 1000);
}
