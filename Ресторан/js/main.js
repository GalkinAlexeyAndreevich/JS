function workForm(key,key2,localArrLogin){
    const form = document.querySelector('.modal-auth')
    const butIn = document.querySelector('.button-auth')
    const butLogin = document.querySelector('.button-login')
    const butOut = document.querySelector('.button-out')
    const loginName = document.querySelector('.user-name')
    const formClose = document.querySelector('.close-auth')

    if (localStorage.getItem(key2)) {
        console.log(JSON.parse(localStorage.getItem(key2)).length)
        if((JSON.parse(localStorage.getItem(key2)).length) > 0){
            localArrLogin = JSON.parse(localStorage.getItem(key2));
            loginName.textContent = localArrLogin[0]
            loginName.style.display = 'flex'
            butOut.style.display = 'flex'
            butIn.style.display = 'none'
        }    
    }
    let localArr = [
        {
            login:123,
            password:123
        }

    ]
    console.log(localArr.length)
    if (localStorage.getItem(key)) {
        console.log(JSON.parse(localStorage.getItem(key)).length)
        if((JSON.parse(localStorage.getItem(key)).length) > localArr.length){
            console.log("Вытащили из локалки")
            localArr = JSON.parse(localStorage.getItem(key)); 
        }    
    }
    console.log(localArr.length)

    butIn.addEventListener('click',()=>{
        form.style.display = 'flex'

    })
    formClose.addEventListener('click',()=>{
        form.style.display = 'none'
    })

    butLogin.addEventListener('click',(e)=>{
        e.preventDefault()
        let check = true
        let check1 = true
        const inputLogin = document.querySelector('#login')
        const inputPassword = document.querySelector('#password')

        if(!inputLogin.value){
            alert('Введите логин')
            return
        }
        if(!inputPassword.value){
            alert('Введите пароль')
            return
        }


        let obj = {
            login:inputLogin.value,
            password:inputPassword.value
        }

        for(let i=0; i<localArr.length; ++i){
            if(localArr[i].login == obj.login && localArr[i].password == obj.password){
                loginName.textContent = inputLogin.value
                localArrLogin.push(inputLogin.value)
                check1 = false
            }
            else if(localArr[i].login == obj.login && localArr[i].password != obj.password){
                check = false
                alert('неверный пароль')
                break
            }
            else if(i == localArr.length-1 && check1){
                localArr.push(obj) 
            }
 
        }
        localStorage.setItem(key2, JSON.stringify(localArrLogin))
        localStorage.setItem(key, JSON.stringify(localArr))

        if(check){
            loginName.style.display = 'flex'
            form.style.display = 'none'  
        }

        butIn.style.display = 'none'
        butOut.style.display = 'flex'
    })

    butOut.addEventListener('click',()=>{
        const inputLogin = document.querySelector('#login')
        const inputPassword = document.querySelector('#password')
        inputLogin.value = ''
        inputPassword.value = ''
        butOut.style.display = 'none'
        butIn.style.display = 'flex'
        loginName.style.display = 'none'
        loginName.textContent = ''
        localArrLogin.length = 0
        localStorage.setItem(key2, JSON.stringify(localArrLogin))
    })

    return loginName.textContent

}
const loginName = document.querySelector('.user-name')
let localArrLogin = []
loginName.textContent = workForm('key1','key2',localArrLogin)