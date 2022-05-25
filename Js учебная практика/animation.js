export function animation(item){
    let num = 4
    let kolvo = 1
    let timer = setInterval(()=>{
        item.style.transform = `rotate(${num*kolvo}deg)`
        kolvo += 1
    },100)
}
