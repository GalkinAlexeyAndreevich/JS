export function closeForm(){
    const cross = document.querySelectorAll(".form-close")
    let mass = [formAddUser, formChange, formDelete]
    for(let i = 0; i < cross.length;i++){
        cross[i].addEventListener("click", ()=>{
            mass[i].style.display = "none"           
        })
        mass[i].addEventListener("click", (e) => {
            if(e.target.closest(".modal__inner")) return      
        });
    }
}