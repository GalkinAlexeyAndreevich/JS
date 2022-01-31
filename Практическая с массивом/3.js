let mass = []
let positive = 0

while (mass.length < 5)
{   
    let num = Math.round(Math.random()*200) - 100;
    num%3 == 0? mass.push(num): mass;
}
for(i=0; i < mass.length; i++){
    if (mass[i] > 0) {positive ++}
}
console.log(mass)
console.log("Наш массив кратный 3 = ",mass)
console.log(`Положительных чисел = ${positive}`)

