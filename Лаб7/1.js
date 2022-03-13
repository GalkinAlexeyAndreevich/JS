// "use strict"
let text = document.body.querySelector(".text") 
let on = document.body.querySelector(".on")
let pause = document.body.querySelector(".pause")
let offPause = document.body.querySelector(".offpause") 
let input = document.body.querySelector(".input")
let time
on.addEventListener("click",()=>{
    num = parseInt(input.value)
    clearInterval(time)
    time = setInterval(time1,1000)   
})
pause.addEventListener("click",()=>{
    clearInterval(time)
    num1 = num    
})
offPause.addEventListener("click",()=>{
    clearInterval(time)
    num = num1
    time = setInterval(time1,1000)
})   
function time1(){
    if(num === 0){
      clearInterval(time)
    }
      text.textContent = num
      num-=1
}
let input1 = document.body.querySelector(".input1")
let h2 = document.body.querySelector(".h2")
let word
input1.addEventListener('keyup',()=>{
    clearTimeout(word)
    word = setTimeout(()=>{
    h2.textContent = input1.value 
},300)
})