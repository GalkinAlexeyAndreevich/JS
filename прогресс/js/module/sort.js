export function createUser(){
    const arr = JSON.parse(localStorage.getItem('client'))

    const surname = formAddUser.querySelector(".surname");
    const name = formAddUser.querySelector(".name");
    const postName = formAddUser.querySelector(".postName");
    let data = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString().slice(0,5)

    if (surname.value && name.value && postName.value) {
        console.log('добавили')
        console.log(arr.length,surname.value, name.value, postName.value,data, time)
        let fio = surname.value + ' ' + name.value + ' ' + postName.value
        let obj = {
            id:arr.length,
            fio:fio,
            // surname:surname.value,
            // name: name.value,
            // postName:postName.value,
            dataCreate:new Date().toLocaleDateString(),
            timeCreate:new Date().toLocaleTimeString().slice(0,5),
            dataChange:new Date().toLocaleDateString(),
            timeChange:new Date().toLocaleTimeString().slice(0,5),
            fullDateCreate:new Date(),
            fullDateChange:new Date()
        }
        arr.push(obj)
        console.log(arr)
        localStorage.setItem('client', JSON.stringify(arr))
        fillTable(arr)
        formAddUser.style.display = "none"
        surname.value = ""
        name.value = "";
        postName.value = "";
    
    }
    btnOtmena.addEventListener("click", () => {
      formAddUser.style.display = "none";
    });
}