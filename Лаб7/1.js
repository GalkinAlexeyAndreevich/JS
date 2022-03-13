let text = document.body.querySelector(".text") 
let on = document.body.querySelector(".on")
let off = document.body.querySelector(".off") 
let input = document.body.querySelector(".input")
let proverka = false
let time
on.addEventListener("click",()=>{
    if(proverka){
        num = num1
    }
    else{num = input.value}
    clearInterval(time)
    time = setInterval(time1,1000)   
})
off.addEventListener("click",()=>{
    num1 = num
    proverka = true
    clearInterval(time)
})   
function time1(){
    if(num == 0){
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