const container = document.querySelector(".container")
let massNum = []
let randomArray = []
let kolvo
let repaired
let povtor = 0
let n = 8
//let index
createCard()
let allBtn = document.querySelectorAll(".btnNum")
function createNumber(mass, n){
    for(let i=0; i<n; i++){
        let num = i
        mass.push(num,num)
    }
    return mass
}
massNum =  createNumber(massNum, n)
console.log(massNum)
function RandArr(mass){
	for(let i=mass.length-1; i>0;i--){
		let j = Math.floor(Math.random()*(i+1))
		let t = mass[i]
		mass[i] = mass[j]
		mass[j] = t
		//[mass[i], mass[j]] = [mass[j], mass[i]]
	}
	return mass
}
console.log(RandArr(massNum))
randomArray = RandArr(massNum)
//massNum = RandArr(massNum)
//console.log(massNum)
/*function massFilter(mass, num){
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
*/
function createCard(){
    for(let i =0; i<4; i++){
        let div = document.createElement("div")
        div.classList.add("line")
        container.append(div)

        for(let i =0; i<4; i++){
        let card = document.createElement("button")
        card.classList.add("btnNum")
        card.textContent = "Js"
        div.append(card)
        }
    }
    let btnClear = document.createElement("button")
    btnClear.textContent = "очистить"
    btnClear.addEventListener('click', ()=>{
        let allBtn = document.querySelectorAll(".btnNum")
        for(let text of allBtn){
            text.textContent = "Js"
            povtor = 0
        }
    })
    container.append(btnClear)

}
container.addEventListener('click',(e)=>{
    let item = e.target.closest(".btnNum")
    for(let i = 0; i<allBtn.length;i++){
        if(item == allBtn[i]){
            /*if(repaired == randomArray[i] && povtor == 1){
                console.log("повтор числа")
                item.textContent = randomArray[i] 
                povtor = 0
                repaired = 0
            }
            else if(repaired != randomArray[i] && povtor){
                console.log("разные числа")
            }
            else{
                item.textContent = randomArray[i] 
                //repaired = randomArray[i] 
                povtor = item
                console.log(povtor)
                console.log(repaired) 
            }*/

			if(povtor){
				console.log(124)
				if(item.textContent == povtor.textContent){
					console.log("одинаковые числа")
				 
				}
				else{
					console.log("разные числа")
				}
				povtor = null
			}
			
			else{
				
				item.textContent = randomArray[i]
				povtor = item
				kolvo ++
				console.log("gthasfk")
			}
		}

	}
})

/*console.log("начальный массив " + createNumber(massNum, n))*/
// console.log("рандомный массив " + RandArr(massNum,randomArray))
