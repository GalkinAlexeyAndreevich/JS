// async function getValue(restaurant) {
//     // let request = await fetch(`./db/${restaurant}.json`);
//     // let data = await request.json();
//     // console.log(data.length)
// }
// getValue('partners')   

function renderItems(data){
    const container = document.querySelector('.cards-restaurants')
    for(let item of data){
       console.log(item['name']) 
       container.innerHTML += (`<a href="restaurant.html" class="card card-restaurant">
						<img src="${item['image']}" alt="image" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${item['name']}</h3>
								<span class="card-tag tag">${item["time_of_delivery"]}</span>
							</div> 
							
							 <div class="card-info">
								<div class="rating">
                                ${item['stars']}
								</div>
								<div class="price">${item['price']}</div>
								<div class="category">${item['kitchen']}</div>
							</div>
							
						 </div>
						
					</a> 
                    `)
    }
    
}
// const restaurant = 'partners'
fetch('https://restorant-39706-default-rtdb.firebaseio.com/db/partners.json')
    .then((response)=> response.json())
    .then((data) =>{
        renderItems(data)
    })
    .catch((error)=>{console.log(error)})
    // <!-- <a href="restaurant.html" class="card card-restaurant">
	// 					<img src="img/pizza-plus/preview.jpg" alt="image" class="card-image" />
	// 					<div class="card-text">
	// 						<div class="card-heading">
	// 							<h3 class="card-title">Пицца плюс</h3>
	// 							<span class="card-tag tag">50 мин</span>
	// 						</div> -->
	// 						<!-- /.card-heading -->
	// 						<!-- <div class="card-info">
	// 							<div class="rating">
	// 								4.5
	// 							</div>
	// 							<div class="price">От 900 ₽</div>
	// 							<div class="category">Пицца</div>
	// 						</div> -->
	// 						<!-- /.card-info -->
	// 					<!-- </div> -->
	// 					<!-- /.card-text -->
	// 				<!-- </a> -->