function forForm(){
    const btnAddUser = document.querySelector(".btn")
    const formAddUser = document.querySelector(".modal2")
    const formChange = document.querySelector(".modal")
    const formDelete = document.querySelector(".modal3")
    const cross = document.querySelectorAll(".form-close")
    const table = document.querySelector("table")
    const tableBody = document.querySelector("tbody")
    const btnAddCont = document.querySelector(".form-btn");
    const btnOtmena = formAddUser.querySelector(".btn-del-form");
    const deleteBtnEnd = formDelete.querySelector(".delete");
    const body = document.body
    let arr = []
    let obj = {
        id:arr.length,
        surname:'Скворцов',
        name: 'Денис',
        postName:'Юрьевич',
        data:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString().slice(0,5)
    }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem('client', JSON.stringify(arr))
    tableBody.innerHTML = ''
    for(let i=0; i<arr.length; i++){
        console.log(1)
        let row = addRow(arr[i])
        tableBody.append(row)  
    }

    

    btnAddUser.addEventListener("click", ()=>{
        formAddUser.style.display = "flex"
    })

    btnAddCont.addEventListener("click", ()=>{
        createUser()
    })
    function addRow(obj){
        console.log(obj)
        let {id, surname, name, postName, data, time} = obj
        let str = document.createElement("tr")
        str.classList.add('tr')
        str.innerHTML = `
    
                <td class="id-content text-title">
                    ${id}
                </td>
                <td class="title-text-black">
                    ${surname} ${name} ${postName}
                </td>
                <td>
                    <div class="text-oposit data-text">
                        <div>
                            <p class="title-text-black">${data}</p>
                        </div>
                        <div class="">
                            <p class="text-2">${time}</p>
                        </div>       
                    </div>
                </td>
                <td>
                    <div class="text-oposit data-text">
                        <div>
                            <p class="title-text-black">${data}</p>
                        </div>
                        <div class="">
                            <p class="text-2">${time}</p>
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
    

    function createUser(){
        arr = JSON.parse(localStorage.getItem('client'))

        const surname = formAddUser.querySelector(".surname");
        const name = formAddUser.querySelector(".name");
        const postName = formAddUser.querySelector(".postName");
        let data = new Date().toLocaleDateString()
        let time = new Date().toLocaleTimeString().slice(0,5)

        if (surname.value && name.value && postName.value) {
            console.log('добавили')
            console.log(arr.length,surname.value, name.value, postName.value,data, time)
            let obj = {
                id:arr.length,
                surname:surname.value,
                name: name.value,
                postName:postName.value,
                data:data,
                time:time
            }
            arr.push(obj)
            console.log(arr)
            localStorage.setItem('client', JSON.stringify(arr))
            let row = addRow(arr[arr.length-1])
            tableBody.append(row)
            formAddUser.style.display = "none"
            surname.value = ""
            name.value = "";
            postName.value = "";
            // myEvent()
        
        }
        btnOtmena.addEventListener("click", () => {
          formAddUser.style.display = "none";
        });
    }


    function closeForm(){
        let mass = [formAddUser, formChange, formDelete]
        for(let i = 0; i < cross.length;i++){
            cross[i].addEventListener("click", ()=>{
                mass[i].style.display = "none"
                
            })
            mass[i].addEventListener("click", (e) => {
                const wind = e.target.closest(".modal__inner");
              
                if (!wind) {
                  mass[i].style.display = "none";
                  body.classList.remove("noscroll");
                }
              });

        }
    }

    // function createTable(arr,arrName){
    //     table.innerHTML = ""
    
    //     let thead = document.createElement("thead");
    //     let tbody = document.createElement("tbody");
    
    //     // container.append(table);
    //     table.appendChild(thead);
    //     table.appendChild(tbody);
    
    //     console.log(arr)
    
    //     for (let i = 0; i < arr.length + 1; i++) {
    //         let row = document.createElement("tr");
    //         if (i == 0) {
    
    //           for (let j = 0; j < arrName.length; j++) {
    //             let cell = document.createElement("th");
    //             cell.textContent = arrName[j];
    //             row.appendChild(cell);
    //             thead.appendChild(row);
    //           }
    //         } else {
    //           fillRow(i - 1, row, arr);
    //           tbody.appendChild(row);
    //         }
    //     }
    //     function fillRow(i, row, mass) {
    //         let nowMoment = new Date()
    //         let FIO = ""
    //         let faculty
    //         let date
    //         let age
    //         let yearStart
    
    //         for(let key in mass[i]){
    //             if(key == "Name" || key == "Surname" || key == "Postname"){
    //                 FIO = FIO + " " + mass[i][key]
    //             }
    //             else if (key == "Faculty"){
    //                 faculty = mass[i][key]
    //             }
    //             else if(key == "Birthday"){
    //                 age = nowMoment.getFullYear() - mass[i][key].slice(0, 4);
    //                 let monthAge = nowMoment.getMonth() + 1 - mass[i][key].slice(5, 7);
    //                 let dayAge = nowMoment.getDay() + 1 - mass[i][key].slice(8, 10);
    //                 if (dayAge < 0) {
    //                     monthAge -= 1;
    //                 }
    //                 if (monthAge < 0) {
    //                     age -= 1;
    //                 }
    //                 console.log(age)
    //                 date = mass[i][key].slice(8,10) + "." + mass[i][key].slice(5,7) + "." + mass[i][key].slice(0,4) +" ("+ age + formAge(age) + ")"
    //             }
    //             else{
    //                 yearStart = mass[i][key]
    //                 console.log(yearStart)
    //             }
    
    //         }
    
    
    //         for(let h = 0;h < massNameTable.length;h++){
    //             if(massNameTable[h] == "ФИО"){
    //                 let cell = document.createElement("td")
    //                 cell.textContent = FIO
    //                 row.appendChild(cell)
    //             }
    //             else if(massNameTable[h] == "Факультет"){
    //                 let cell = document.createElement("td")
    //                 cell.textContent = faculty
    //                 row.appendChild(cell)
    //             }
    //             else if(massNameTable[h] == "Дата рождения"){
    //                 let cell = document.createElement("td")
    //                 cell.textContent = date
    //                 row.appendChild(cell)
    //             }
    //             else{
    //                 let cell = document.createElement("td")
    //                 cell.textContent = forYearLerning(yearStart)
    //                 row.appendChild(cell)
                    
    //             }
    //         }    
    //       }
    //       return table
    //     // return container.append(table)
    // }

    closeForm()
    function myEvent(){
        arr = JSON.parse(localStorage.getItem('client'))
        console.log(1, arr)
        let arrCopy = [...arr]
        let newArr = []
        // const changeBtn = document.querySelectorAll('.btn-change')
        // const deleteBtn = document.querySelectorAll('.btn-delete')
        // console.log(changeBtn)
        // console.log(deleteBtn)
        tableBody.addEventListener('click', (e)=>{
            e.preventDefault()
            console.log(1)
            let item = e.target
            let deleteItem = ''
            console.log(item)
            if(String(item.className).includes('btn-change')){
                console.log('нажали изменить')
                let arrItem = item.className.split(' ')
                console.log(arrItem[arrItem.length-1])
                formChange.style.display = 'flex'
            }
            if(String(item.className).includes('btn-delete')){
                console.log('нажали удалить',)

                formDelete.style.display = 'flex'
                    deleteBtnEnd.addEventListener('click',(e)=>{
                    e.preventDefault()
                    // while(!(String(item.className).includes('tr'))){
                    //     item+='.parentElement'
                    //     console.log(item)
                    // }
                    deleteItem = item.parentElement.parentElement.parentElement

                    console.log(deleteItem)
                })
            }

        })
        // for(let i=0; i<changeBtn.length; i++){
        //     console.log('новый')
        //     changeBtn[i].addEventListener('click',()=>{
        //         console.log('нажали')
        //         formChange.style.display = 'flex'
        //     })
        //     deleteBtn[i].addEventListener('click',()=>{
        //         console.log('нажали', i)
        //         console.log(deleteBtn[i])
        //         formDelete.style.display = 'flex'
        //     })
        //     deleteBtnEnd.addEventListener('click',()=>{
                
        //         tableBody.innerHTML = ''
        //         console.log('очистили')
        //         for(let j=0; j<arr.length; j++){
        //             if(i != j){
        //                 newArr.push(arrCopy[i])
        //             } 
        //         }
        //         console.log(newArr)
        //         formDelete.style.display = 'none'
        //         for(let i=0; i<newArr.length; i++){
        //             let row = addRow(newArr[i])
        //             tableBody.append(row)  
        //         }
        //         localStorage.setItem('client', JSON.stringify(newArr))
        //         myEvent()
        //     })
        // }
        

        

    }
    myEvent()
}

forForm()




