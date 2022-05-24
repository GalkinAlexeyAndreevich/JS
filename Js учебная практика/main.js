

// getHours(), getMinutes(), getSeconds()

function getToday(){
    const timerItems = document.querySelectorAll(".timer__count")
    console.log(timerItems)
    const today = new Date()
    let arrToday = [today.getDate(),today.getHours(),today.getMinutes(),today.getSeconds()]
    // let days = today.getDate() 
    // let hours = today.getHours()
    // let minutes = today.getMinutes()
    // let seconds = today.getSeconds() 
    for(let i=0; i<arrToday.length; i++){
        timerItems[i].textContent =  arrToday[i]
    }
}

let timer = setInterval(()=>{getToday()},1000)


const applicationButtons = document.querySelectorAll(".application")
for(item of applicationButtons){
    item.addEventListener('click', ()=>{
        alert("Оставить заявку")
    })
}
