const container = document.querySelector(".container")
let massNum = []
let randomArray = []
let kolvo
let repaired
let po
let n = 4
createCard()
let allBtn = document.querySelectorAll(".btnNum")
function createRandomNumber(mass, n){
    for(let i=0; i<n; i++){
        let num = Math.round(Math.random()*100)
        mass.push(num,num)
    }
    return mass
}

function RandArr(mass,randomArray){
    while (true){
        if(mass.length == 0){
            return randomArray
        }

        let randIndex = Math.floor(Math.random()*mass.length | 0);
        let num = mass[randIndex];
        mass = massFilter(mass, num)

        randomArray.push(num)  
    }     
}

function massFilter(mass, num){
    let proverka = false
    let newArr = []
    for(let check of mass){
        if(check==num && proverka == false){
            proverka = true
            continue
        }
        else{
           newArr.push(check) 
        }
        
    }
    return newArr
}
function createCard(){
    for(let i =0; i<3; i++){
        let div = document.createElement("div")
        div.classList.add("line")
        container.append(div)

        for(let i =0; i<3; i++){
        let card = document.createElement("button")
        card.classList.add("btnNum")
        card.textContent = "Js"
        div.append(card)
        }
    }


}

container.addEventListener('click',(e)=>{
    let item = e.target.closest(".btnNum")
    
    console.log(item)
    for(let i = 0; i<allBtn.length;i++){
        if(item == allBtn[i]){
            item.textContent = randomArray[i] 
            repaired = randomArray[i] 
            console.log(repaired)
            kolvo++
        }
    }
    
})

console.log("начальный массив " + createRandomNumber(massNum, n))
// console.log("рандомный массив " + RandArr(massNum,randomArray))
randomArray = RandArr(massNum,randomArray)
console.log(randomArray)

console.log(container)