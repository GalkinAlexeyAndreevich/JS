function createCart(){
    const buttonCart = document.querySelector('.button-cart')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')

    function renderItems(data){
        data.forEach(item=>{
            const {name, price, id, count} = item
            const cartElem = document.createElement('div')
            cartElem.classList.add('food-row')
            cartElem.innerHTML =  `
            <span class="food-name">${name}</span>
            <strong class="food-price">${price}₽</strong>
            <div class="food-counter">
                <button class="counter-button btn-dec">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button btn-inc">+</button>
            </div>
            `
            console.log(item)
        })
    }

    buttonCart.addEventListener('click',()=>{
// food-row
        if(localStorage.getItem('cart')){
            console.log(JSON.parse(localStorage.getItem('cart'))) 
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }
        modalCart.classList.add('is-open')
    })
    close.addEventListener('click',()=>{
        modalCart.classList.remove('is-open')
    })
    console.log(buttonCart)
}
createCart()
