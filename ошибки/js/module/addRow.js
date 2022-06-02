export function addRow(obj){
    // console.log(obj)
    let {id, fio,  dataCreate, timeCreate, dataChange, timeChange, contacts} = obj
    console.log(contacts)
    let str = document.createElement("tr")
    str.classList.add('tr')
     // ${surname} ${name} ${postName}
    str.innerHTML = `

            <td class="id-content text-title">
                ${id}
            </td>
            <td class="title-text-black">
                ${fio}
               
            </td>
            <td>
                <div class="text-oposit data-text">
                    <div>
                        <p class="title-text-black">${dataCreate}</p>
                    </div>
                    <div class="">
                        <p class="text-2">${timeCreate}</p>
                    </div>       
                </div>
            </td>
            <td>
                <div class="text-oposit data-text">
                    <div>
                        <p class="title-text-black">${dataChange}</p>
                    </div>
                    <div class="">
                        <p class="text-2">${timeChange}</p>
                    </div>          
                </div>
            </td>
            <td class='icons'>
            </td>
            <td >
                <div class="table_btn">
                    <button class="btn-change ${id}"><img src="img/Vector3.svg" alt=""> Изменить</button>
                    <button class="btn-delete ${id}"><img src="img/Vector (1).svg" alt=""> Удалить</button>
                </div>                    
                        
            </td>
        
    `;

    let icons = str.querySelector('.icons')
    for(let contact of contacts){
        // <p class='display-off'>${contact.value}</p>
    //     <div class="contact-text">
    //     <img src="img/icon/${contact.type}.svg" data-tippy-content = 'mdds' aria-describedby="tippy-2" alt="">
    // </div>
        icons.innerHTML+=`
        <div>
            <img src="img/icon/${contact.type}.svg" alt="">
        </div>

        `
        // <p id="info">
        // ${contact.value}
        // </p>
    //     icons.innerHTML+=`
    //         <div role="application" aria-labelledby="contact-image" aria-describedby="info">
    //         //     <div id="contact-image" >
    //         //         <img src="img/icon/${contact.type}.svg" alt="">
    //         //     </div>


    //         // </div
    // `


        console.log(contact)
    }
    // icons
    return str
}