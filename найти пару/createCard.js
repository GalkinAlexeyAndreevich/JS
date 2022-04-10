export function createCard(n,container){
    for(let i =0; i<Math.round(Math.sqrt(n)); i++){
        let div = document.createElement("div")
        div.classList.add("line")
        
        if(i == Math.round(Math.sqrt(n))-1 && n%(Math.round(Math.sqrt(n))) >0){
            for(let k =0; k<n%Math.ceil(Math.sqrt(n)); k++){
                let card = document.createElement("div")
                card.classList.add("btnNum")
                card.textContent = "Js"
                div.append(card)
            }

        }
        else{
            for(let j =0; j<Math.sqrt(n); j++){
            let card = document.createElement("div")
            card.classList.add("btnNum")
            card.textContent = "Js"
            div.append(card)
            }
        }
        container.append(div)
    }
}