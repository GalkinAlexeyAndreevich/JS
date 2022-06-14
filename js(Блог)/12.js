let mass = []
const content = document.querySelector(".content");

console.log(content)
// const stat = document.querySelector(".stat")
const baseURL = document.location


let btns = document.createElement("div")
btns.classList.add("btns")
let butn1 = document.createElement("button")
let butn2 = document.createElement("button")
butn1.textContent ="назад"
butn2.textContent ="вперёд"


let str = document.createElement("div")

str.textContent = (new URL(window.location)).searchParams.get('page')
if(!str.textContent){
  str.textContent = 1
}
if(str.textContent==1){
  butn1.style.display = 'none'
}

butn1.addEventListener("click",(e)=>{
  e.preventDefault()
  str.textContent=(new URL(window.location)).searchParams.get('page')
  if(str.textContent>1){
    str.textContent -= 1
    content.innerHTML =``
    console.log(document.location)
    window.location = `index1.html?page=${str.textContent}`

    zapros(str.textContent)

   
    
  }
  if(str.textContent==1){
    butn1.style.display = 'none'
  }
})
// http://127.0.0.1:5500/index1.html
butn2.addEventListener("click",(e)=>{
  e.preventDefault()
  let url = (new URL(window.location)).searchParams.get('page')
  if(!url){
    url = 1
  }
  str.textContent= url
  str.textContent = Number(str.textContent) + 1
  content.innerHTML =``

  window.location = `index1.html?page=${str.textContent}`
  zapros(str.textContent)

})


async function zapros(page){
  page = (new URL(window.location)).searchParams.get('page')
  console.log(1,page)
  console.log(page)
  console.log(window.location)
  if(!page){
    page = 1
  }
  if(page == 5){
    butn2.style.display = 'none'
  }
  console.log(2,page)

    let response = await fetch(
      "https://gorest.co.in/public-api/posts?page="+`${page}`,
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
    mass = data.data
    console.log(mass);

    spisok();
}
zapros(str.textContent)

function spisok(){
  const title = document.createElement("h1")
  title.textContent = "Список статей"
  const ol = document.createElement("ol")
    for(let i = 0;i< mass.length;i++){
      console.log(32)
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.href = "index2.html?" + `id=${mass[i].id}`
        let title = document.createElement("h1")
        let cont = document.createElement("p");
        a.id = mass[i].id
        a.classList.add = `${i}`
        title.textContent = mass[i].title
        cont.textContent = mass[i].body
        li.append(a)
        ol.append(li)
        a.append(title)
        
    }
    content.append(ol)
    btns.append(butn1,str,butn2)
    content.append(btns)

}
// async function zaprosComments(){
//   let response = await fetch(
//       "https://gorest.co.in/public-api/comments",
//     {
//       method: "GET",
//       headers: {
//         Autorization:
//           "Bearer abe270fbdd84e8ebcc0e5957bdd2494342e4ce485ac8adf82eb5479909320489",
//         "Content-Type": "application/json",
//       },
//     }
//   )
//   const data = await response.json()
//   let obj = data.data
//   console.log(obj);

// }
// zaprosComments()
// function createComment(){
//   const div = document.createElement('div')
//   const title = document.createElement('h1')
//   title.innerHTML = "Comments"
  
// }

