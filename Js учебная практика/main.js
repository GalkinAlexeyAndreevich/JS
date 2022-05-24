function getToday(){
    const timerItems = document.querySelectorAll(".timer__count")
    console.log(timerItems)
    const today = new Date()
    let arrToday = [today.getDate(),today.getHours(),today.getMinutes(),today.getSeconds()]
    for(let i=0; i<arrToday.length; i++){
        timerItems[i].textContent =  arrToday[i]
    }
}

let timer = setInterval(()=>{getToday()},1000)
// const applicationButtons = document.querySelectorAll(".application")
// for(item of applicationButtons){
//     item.addEventListener('click', ()=>{
//         alert("Оставить заявку")
//     })
// }



const modalWindow = document.querySelector('.modal')
const buttonModals = document.querySelectorAll('.application')
const modalClose = document.querySelector('.modal__close')
const body = document.querySelector('.body')

buttonModals.forEach((item) =>{
    item.addEventListener('click', ()=>{
        modalWindow.style.display = ''
        body.classList.add('noscroll')
    })
})

modalWindow.addEventListener('click', (e)=>{
    const isModal = e.target.closest('.modal__inner')
    if(!isModal){
        modalWindow.style.display = 'none'
    }
})

modalClose.addEventListener('click', ()=>{
    modalWindow.style.display = 'none'
})