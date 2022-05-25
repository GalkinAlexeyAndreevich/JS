export function getModal(){
    let applicationButtons = document.querySelectorAll(".application")
    const modal = document.querySelector(".modal")
    const cross = document.querySelector(".modal__close")
    const body = document.querySelector("body")

    for(let item of applicationButtons){
        item.addEventListener('mouseout',()=>{
            item.style.opacity = '1'

        })
        item.addEventListener('mouseover',()=>{
            item.style.opacity = '0.8'
            // item.classList.add('white')
        })
        item.addEventListener('click', ()=>{
            // alert("Оставить заявку")
            modal.style.display = "flex";
            body.classList.add("noscroll")
        })
    }

    modal.addEventListener("click", (e)=>{
        const wind = e.target.closest(".modal__inner")

        if(!wind){
            modal.style.display = "none";
            body.classList.remove("noscroll")
        }
    })

    cross.addEventListener("click",()=>{
        modal.style.display = "none";
        body.classList.remove("noscroll")
    }) 
}