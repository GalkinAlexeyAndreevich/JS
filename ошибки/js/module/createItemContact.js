export function createItemContact(){
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
    return divContact
}