let url = (new URL(document.location)).searchParams
console.log(url)

// let mass = []

const content = document.querySelector(".content")
const btn = document.createElement("button")
btn.textContent = "Назад"

btn.addEventListener("click",()=>{
    window.location = "index1.html"
})

let id = url.get('id')
console.log(id)
// console.log(id.searchParams('id'))
// console.log(id)

async function zapros(){
    let response = await fetch(
      "https://gorest.co.in/public-api/posts/"+`${id}`,
      {
        method: "GET",
        headers: {
          Autorization:
            "Bearer abe270fbdd84e8ebcc0e5957bdd2494342e4ce485ac8adf82eb5479909320489",
          "Content-Type": "application/json",
        },
      }
    )
    const data = await response.json()
    let obj = data.data
    console.log(obj);

    spisok(obj);
    zaprosComments()
}
zapros()
async function zaprosComments(){
    let response = await fetch(
        "https://gorest.co.in/public-api/comments?post_id="+`${id}`,
      {
        method: "GET",
        headers: {
          Autorization:
            "Bearer abe270fbdd84e8ebcc0e5957bdd2494342e4ce485ac8adf82eb5479909320489",
          "Content-Type": "application/json",
        },
      }
    )
    const data = await response.json()
    let obj = data.data
    console.log(obj);

    createComment(obj)
}

function spisok(obj){
    console.log(obj)
    let title = document.createElement("h1")
    const text = document.createElement("p")
    title.textContent = obj.title
    text.textContent = obj.body
    content.append(title,text);

   
}
function createComment(obj){
    console.log(obj)
    let title = document.createElement("h1")
    title.classList.add("titleComment")
    const divComment = document.createElement("div")
    divComment.classList.add('divComment')
    title.textContent = 'Comments:'
    content.append(title);
    for(let item of obj){
        const div = document.createElement("div")
        div.classList.add('comment')
        let nameComment = document.createElement("p")
        nameComment.classList.add('nameComment')
        let cont = document.createElement("p");
        nameComment.textContent = item.name+":"
        cont.textContent = item.body
        div.append(nameComment,cont)
        divComment.append(div)

    }
    content.append(title,divComment,btn)
       
        
       
    
}


