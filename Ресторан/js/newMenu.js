const containerProduct = document.querySelector('.cards-menu')

const cartArray = localStorage.getItem('cart')?
JSON.parse(localStorage.getItem('cart')):[]

function changeItem(restaurant){
    const sectionHeading = document.querySelector('.section-heading')
    sectionHeading.innerHTML = `<h2 class="section-title restaurant-title">${restaurant.name}</h2>
    <div class="card-info">
        <div class="rating">
        ${restaurant.stars}
        </div>
        <div class="price">От ${restaurant.price} ₽</div>
        <div class="category">${restaurant.kitchen}</div>
    </div>`
}

function addToCart(obj){
    if(cartArray.some((item)=>item.id === obj.id)){
        cartArray.map((item =>{
            if(item.id === obj.id){
                item.count++
            }
            return item
        }))
    }
    else{
       cartArray.push(obj) 
    }
    
    localStorage.setItem('cart', JSON.stringify(cartArray))
}


const renderItems = (data)=>{
    data.forEach(({description, id, image, name, price}) =>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src="${image}" alt="image" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">${description}"
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold"> ${price}₽</strong>
                </div>
            </div>
        `
        card.querySelector('.button-card-text').addEventListener('click', ()=>{
            console.log(JSON.parse(localStorage.getItem('key2')))
            let owner = (JSON.parse(localStorage.getItem('key2')))[0]
            console.log(owner)
            addToCart({name, price, id, count:1,owner})
        })
        containerProduct.append(card)
    })
}
if(localStorage.getItem('restaurant')){
    const restaurant = JSON.parse(localStorage.getItem('restaurant'))
    changeItem(restaurant)
    console.log(restaurant)
    fetch(`./db/${restaurant.products}`)
    .then((response)=> response.json())
    .then((data)=>{
        renderItems(data)
    })
    .catch((error)=>{
        console.log(error)
    })
}
else{
    window.location.href = '/'
}

