function createCart(){
    const buttonCart = document.querySelector('.button-cart')
    const modalCart = document.querySelector('.modal-cart')
    const modalBody = document.querySelector('.modal-body')
    const close = modalCart.querySelector('.close')
    const butSend = modalCart.querySelector('.button-primary')

    if(localStorage.getItem('cart')){
        renderItems(JSON.parse(localStorage.getItem('cart')))
    }
    console.log(butSend.textContent)

    function resetCart(){
        console.log(modalBody)
        const modalPriceTag = document.querySelector('.modal-pricetag')
        modalPriceTag.textContent = '0'
        modalBody.innerHTML = ''
        const cartArr = JSON.parse(localStorage.getItem('cart'))
        console.log(cartArr)
        const ownerNow = JSON.parse(localStorage.getItem('key2'))
        console.log(ownerNow)
        // // for(let item of cartArr){
        // //     // if(item.owner == owner){

        // //     // }
        // // }
        // console.log('начальный массив', cartArr)
        let newArr = []
        for(let item of cartArr){
            if(item.owner != ownerNow){
                newArr.push(item)
            }
        }
        console.log(newArr)
        localStorage.removeItem('cart')
        console.log(JSON.parse(localStorage.getItem('cart')))
        localStorage.setItem('cart', JSON.stringify(newArr))
        console.log(JSON.parse(localStorage.getItem('cart')))
        // cartArr.map((item)=>{
        //     console.log('проверка', item.owner, owner)
        //     if(item.owner == owner){
        //         console.log('удалить')
        //     }
        //     else{
        //        return item 
        //     }
            
        // })
        // console.log('конечный массив', cartArr)
        // console.log('текущий хозяин',owner)
        // localStorage.removeItem('cart')
        modalCart.classList.remove('is-open')
    }
    function incCount(id){
        const cartArr = JSON.parse(localStorage.getItem('cart'))
        const ownerNow = JSON.parse(localStorage.getItem('key2'))
        cartArr.map((item)=>{
            if(item.id === id && item.owner == ownerNow){
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
        const ownerNow = JSON.parse(localStorage.getItem('key2'))
        cartArr.map((item)=>{
            if(item.id === id && item.owner == ownerNow && item.count > 0){
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
        const ownerNow = (JSON.parse(localStorage.getItem('key2')))[0]
        data.forEach(item=>{
            const {name, price, id, count,owner} = item
            if(ownerNow == owner && count > 0){
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
            }
            else{
                console.log('Не ваш заказ')
            }
            
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
            
            console.log(response)
        })
        resetCart()
        console.log(modalBody)

    })
    buttonCart.addEventListener('click',()=>{
        console.log('нажали')
        if(localStorage.getItem('cart')){
            console.log('массив возможно после удаления',JSON.parse(localStorage.getItem('cart')) )
            // console.log(JSON.parse(localStorage.getItem('cart'))) 
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
