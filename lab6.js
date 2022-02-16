"use strict"
let objects = [
    { name: "Василий", surname: "Васильев" },
    { name: "Иван", surname: "Иванов" },
    { name: "Пётр", surname: "Петров" },
    { name: "Иван", surname: "Петров" },
    { name: "Василиса", surname: "Васильева" }
]

let mass_otvet = []

function filter(mass,property,meaning){
    for(let i = 0; i < mass.length; i++){
        for(let prop in mass[i]){
            console.log(prop)
            if (mass[i][prop] == meaning && prop == property){
                mass_otvet.push(mass[i])
                console.log(prop)
            } 
        }
        
    }
    if(mass_otvet==0){return("Ничего не найдено")}
    return mass_otvet
}

let result = filter(objects, "name","Иван")
console.log(result)
