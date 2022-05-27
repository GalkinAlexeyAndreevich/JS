function createCart(){
    const buttonCart = document.querySelector('.button-cart')
    const modalCart = document.querySelector('.modal-cart')
    const modalBody = document.querySelector('.modal-body')
    const close = modalCart.querySelector('.close')
    const butSend = modalCart.querySelector('.button-primary')
    console.log(butSend.textContent)

    function resetCart(){
        const modalPriceTag = document.querySelector('.modal-pricetag')
        modalPriceTag.textContent = '0'
        modalBody.innerHTML = ''
        localStorage.removeItem('cart')
        modalCart.classList.remove('is-open')
    }
    function incCount(id){
        const cartArr = JSON.parse(localStorage.getItem('cart'))

        cartArr.map((item)=>{
            if(item.id === id){
                console.log('увеличили')
                item.count++
            }
            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArr))
        renderItems(cartArr)
    }
    function decCount(id){
        const cartArr = JSON.parse(localStorage.getItem('cart'))

        cartArr.map((item)=>{
            if(item.id === id && item.count > 0){
                    item.count--
            }
            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArr))
        renderItems(cartArr)
    }
    function renderItems(data){
        modalBody.innerHTML = ''
        const modalPriceTag = document.querySelector('.modal-pricetag')
        modalPriceTag.textContent = ''
        let num = 0
        console.log(modalPriceTag.textContent)
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

            cartElem.querySelector('.btn-dec').addEventListener('click',()=>{
                decCount(id)

            })
            cartElem.querySelector('.btn-inc').addEventListener('click',()=>{
                incCount(id)

            })
            num += price * count
            console.log(item)
            modalBody.append(cartElem)
        })
        modalPriceTag.textContent = num

    }
    butSend.addEventListener('click',()=>{
        const cartArr = localStorage.getItem('cart')
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: cartArr
        })
        .then(response =>{
            resetCart()
            console.log(response)
        })

    })
    buttonCart.addEventListener('click',()=>{
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
