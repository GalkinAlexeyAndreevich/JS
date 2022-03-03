//1
let square = document.body.querySelector(".square")
let but1 = document.body.querySelector(".but1")
but1.addEventListener('click',
() =>{
    square.style.backgroundColor = "black" 
    alert("Привет мир!")
}  
)
//2
let but2 = document.body.querySelector(".but2") 
let input2 = document.body.querySelector(".input2")
but2.addEventListener('click',() =>{input2.value = "test@email.ru"})
//3
let but3 = document.body.querySelector(".but3") 
let input3 = document.body.querySelector(".input3")
but3.addEventListener('click',() =>{
    if(input3.value.length == 0){alert("Вы ничего не ввели в поле")}
    else {alert(`Вы ввели ${input3.value}`)}
})
//4
let but4 = document.body.querySelector(".but4")
let input4 = document.body.querySelector(".input4")
let input4_1 = document.body.querySelector(".input4_1")
but4.addEventListener('click',() =>{
    [input4.value, input4_1.value] = [input4_1.value, input4.value]
})
//5
let but5 = document.body.querySelector(".but5") 
let but5_1 = document.body.querySelector(".but5_1")
let input5 = document.body.querySelector(".input5")
but5.addEventListener('click',() =>{
    input5.disabled = "disabled"
})
but5_1.addEventListener('click',() =>{
    input5.disabled = null
})
//6
let but6 = document.body.querySelector(".but6") 
let square6 = document.body.querySelector(".square6")
but6.addEventListener('click',()=>{
    if(square6.hidden == true){square6.hidden = false, but6.textContent = "скрыть квадрат"}
    else{square6.hidden = true, but6.textContent = "показать квадрат"}
})
//7
let square7 = document.body.querySelector(".square7")
square7.addEventListener('mouseover',()=>{square7.style.backgroundColor = "green"})
square7.addEventListener('mouseout',()=>{square7.style.backgroundColor = "red"})
// 8