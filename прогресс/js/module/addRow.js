export function addRow(obj){
    // console.log(obj)
    let {id, fio,  dataCreate, timeCreate, dataChange, timeChange} = obj
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
            <td>
                <img src="img/icon/Vector.svg" alt="">
                <img src="img/icon/fb.svg" alt="">
                <img src="img/icon/phone.svg" alt="">
                <img src="img/icon/mail.svg" alt="">
                <img src="img/icon/mail (1).svg" alt="">
            </td>
            <td>
                <div class="tabl_btn">
                    <button class="btn-change ${id}"><img src="img/Vector3.svg" alt=""> Изменить</button>
                    <button class="btn-delete ${id}"><img src="img/Vector (1).svg" alt=""> Удалить</button>
                </div>                    
                        
            </td>
        
    `;
    return str
}