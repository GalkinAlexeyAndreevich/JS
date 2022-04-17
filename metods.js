// // 1 задание
// let data = "2025-12-31"
// // let data2 = data.replaceAll('-', '/')
// data2 = data.split("-")
// if(data2[0].length == 4){
//     // console.log("Это год")
//     [data2[0], data2[data2.length-1]]  = [data2[data2.length-1], data2[0]]
// }
// data2 = data2.join("/")
// console.log(data2)



// // 2 задание
// str = "hEllo woRld";
// function initCap(str){
//     let arr = str.split(" ")
//     let newArr = []
//     for(let word of arr){
//         word = word[0].toUpperCase()+ word.substr(1).toLowerCase()
//         newArr.push(word)
//     }
//     str = newArr.join("")
//     return str
// }
// console.log(initCap(str))


// 3 задание
let fullName = 'Иван Иванович Иванов';
let surname = 'Иванов';
let arr = fullName.split(" ")
if(arr[arr.length - 1] == surname){
    arr.unshift(arr[arr.length - 1] )
    arr.pop()
    // [arr[arr.length - 1], arr[0]] = [arr[0], arr[arr.length - 1]]
    console.log(arr)
}
fullName = arr.join(" ")
console.log(fullName)