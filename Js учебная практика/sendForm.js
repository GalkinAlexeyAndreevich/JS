export function sendForm(){
    let arrLetters = []
    const form = document.querySelector('.modal')
    const inputForms = document.querySelectorAll('.modal__input')

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let obj = {
            name:inputForms[0].value,
            phone:inputForms[1].value,
            email:inputForms[2].value,
        }
        for(let item of inputForms){
            item.value = ''
        }
        
        // arrLetters.push(obj)
        // console.log(arrLetters)
        postItem(obj);
        getValue()
    })
    
}        
async function postItem(obj) {
    let request = await fetch("http://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(obj),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    const answer = await request.json();
    console.log(answer);
}

async function getValue() {
        let request = await fetch("http://jsonplaceholder.typicode.com/posts");
        let data = await request.json();
        console.log('answer:', data.length)
}