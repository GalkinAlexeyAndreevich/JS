const container = document.querySelector(".container")
function createCard(){
    for(let i =0; i<3; i++){
        let div = document.createElement("div")
        div.classList.add("line")
        container.append(div)
        for(let i =0; i<3; i++){
        let card = document.createElement("p")
        card.textContent = "1"
        div.append(card)
        }
    }


}
createCard()
container.addEventListener('click',e=>{
    let item = e.target.textContent
    console.log(23)
    if(item == "1"){
        item.textContent = "2"
    }
    
})
