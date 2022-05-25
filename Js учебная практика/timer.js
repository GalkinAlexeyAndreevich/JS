export function getTimer(timer){
    const timerItems = document.querySelectorAll(".timer__count")
    const timerTexts= document.querySelectorAll(".timer__text")
    const date = new Date()
    const dateDeadline = new Date('2022.06.01').getTime()
    const timeRemaining = (dateDeadline - date) /1000

    if(timeRemaining < 0){
        clearInterval(timer)
        for(let i=0; i<timerItems.length; i++){
            timerItems[i].textContent = '00' 
            timerTexts[i].textContent = transformWord(i,timeLeft[i])
        }
        return
    }
    
    const days = Math.floor(timeRemaining/60/60/24)
    const hours = Math.floor((timeRemaining/60/60)%24)
    const minutes = Math.floor((timeRemaining/60) %60)
    const seconds = Math.floor(timeRemaining % 60)
    
    let timeLeft = [days,hours,minutes,seconds]

    for(let i=0; i<timerItems.length; i++){
        if(timeLeft[i] <10){
            timerItems[i].textContent =  '0' + timeLeft[i]  
        }
        else{
            timerItems[i].textContent = timeLeft[i] 
        }
        timerTexts[i].textContent = transformWord(i,timeLeft[i])
    }
}

function transformWord(i,num){
    const arrWord = [
        ['день','дня','дней'],
        ['час','часа','часов'],
        ['минута','минуты','минут'],
        ['секунда','секунды','секунд']
    ]
    const lastNum = num % 10
    if(num > 10 && num < 20)arrWord[i][2]
    if(lastNum == 1)return arrWord[i][0]
    if(lastNum > 1 && num % 10 < 5)return arrWord[i][1]
    return arrWord[i][2]
}