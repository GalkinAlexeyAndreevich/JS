const cardsRestaurantsDiv = document.querySelector('.cards-restaurants')
const containerProduct = document.querySelector('.cards-menu')
async function fetchRequest(path){
    let request = await fetch(`https://restorant-39706-default-rtdb.firebaseio.com/db/${path}`);
    let data = await request.json();
	console.log(data)
	renderItems(data)

}
fetchRequest('partners.json')

function renderItems(data){
    data.forEach((item)=> {
        const {image, kitchen, name, price, products, stars, time_of_delivery} = item
        const a = document.createElement('a')
        a.setAttribute('href', '/restaurant.html')
        a.classList.add('card')
        a.classList.add('card-restaurant')

        a.dataset.products = products
        a.innerHTML = `
            <img src="${image}" alt="image" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин</span>
                </div> 
                
                <div class="card-info">
                    <div class="rating">
                    ${stars}
                    </div>
                    <div class="price">от ${price}</div>
                    <div class="category">${kitchen}</div>
                </div>
                
            </div>
        `
        a.addEventListener('click',(e)=>{
            e.preventDefault()
            console.log(a)
            localStorage.setItem('restaurant',JSON.stringify(item))
            window.location.href = '/restaurant.html'
        })
        cardsRestaurantsDiv.append(a)
    });
}
