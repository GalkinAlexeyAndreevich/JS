export function contactsForm(){
    const divContacts = document.querySelectorAll(".add-contacts-div")
    const btnAddContacts = document.querySelectorAll(".btn-form-cont")
    for(let i=0; i<btnAddContacts.length; i++){
        btnAddContacts[i].addEventListener('click',()=>{
            const divContact = document.createElement('div')
            divContact.classList.add('item-contact')
            divContact.classList.add('center-contact')
            divContact.innerHTML =    `
                <select name="" id="" class="select-contact">
                    <option value="phone">Teлефон</option>
                    <option value="email">Email</option>
                    <option value="fb">Facebook</option>
                    <option value="vk">VK</option>
                    <option value="other">Другое</option>
                </select>
                <input type="text" class="input-contact">
                <div class="closeContact">
                    <img src="img/Vector (1).svg" alt="">
                </div>
            `
            console.log('нажали', btnAddContacts[i])
            const allItems = divContacts[i].querySelectorAll('.item-contact')
            if(allItems){
                console.log(allItems.length)
                if(allItems.length > 10){
                    btnAddContacts[i].style.display = 'none'
                } 
            }

            divContacts[i].append(divContact)

        })
    }
}
