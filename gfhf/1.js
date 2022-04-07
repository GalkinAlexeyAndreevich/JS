const container = document.querySelector(".container")
let massNum = []
let kolvo =0
let repaired
let povtor
let n = 8
let time;
massNum =  createNumber(massNum, n)
randomArray = RandArr(massNum)
console.log(RandArr(massNum))
createCard(n)
let allBtn = document.querySelectorAll(".btnNum")

function createNumber(mass, n){
    for(let i=0; i<n; i++){
        let num = i
        mass.push(num,num)
    }
    return mass
}

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


function createCard(n){
    for(let i =0; i<n/2; i++){
        let div = document.createElement("div")
        div.classList.add("line")
        container.append(div)

        for(let i =0; i<n/2; i++){
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
            text.disabled = null
            povtor = 0
        }
    })
    container.append(btnClear)

}

container.addEventListener('click',(e)=>{
    let item = e.target.closest(".btnNum")
    for(let i = 0; i<allBtn.length;i++){
        if(item == allBtn[i]){
            item.textContent = randomArray[i]

			if(kolvo == 1){
                for(let i = 0; i<allBtn.length; i++){
                    allBtn[i].disabled = true
                }

				if(item.textContent == povtor.textContent){
                    for(let i = 0; i<allBtn.length; i++){
                        if(allBtn[i].disabled == true && allBtn[i].textContent == "Js"){
                            allBtn[i].disabled = null
                        }
                        
                    }
                    item.disabled = true
                    povtor.disabled = true
				}

				else{
                    clearTimeout(time)
                    time = setTimeout(()=>{
                        item.textContent = "Js"
                        povtor.textContent= "Js"
                        for(let i = 0; i<allBtn.length; i++){
                            if(allBtn[i].textContent == "Js"){
                                allBtn[i].disabled = null
                            }
                            
                        }
                    },1000)
                    
				}
                
                kolvo-=1

				
			}
			
			else{
                kolvo+=1
                povtor = null
				povtor = item
			}
		}

	}
})

/*console.log("начальный массив " + createNumber(massNum, n))*/
// console.log("рандомный массив " + RandArr(massNum,randomArray))
