// import { createNumber } from "./createNumber.js"
import { createNumber, RandArr } from "./randArr.js"
import { createCard } from "./createCard.js"
import { BeginGame } from "./beginGame.js"
import { gameOver } from "./gameOver.js"
const mainContainer = document.querySelector(".game")
const container = document.querySelector(".playingField")
let massNum = []
let amount =false
let repeat
let numbersFound = 0
let n
let time1
const Begin = BeginGame(mainContainer)
Begin.form.addEventListener('submit', (e)=>{
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
    console.log("Начать заново")
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
container.addEventListener('click',(e)=>{
    let allBtn = document.querySelectorAll(".btnNum")
    let item = e.target.closest(".btnNum")
    for(let i = 0; i<allBtn.length;i++){
        if(item == allBtn[i]){
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
                            alert("Вы выиграли")
                            
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