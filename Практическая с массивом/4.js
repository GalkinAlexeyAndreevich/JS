let mass = []
let positive = 0
let chet = 0
let summa = 0
while (mass.length < 5)
{   
    let num = Math.round(Math.random()*200) - 100;
    num%3 == 0? mass.push(num): mass;
}
for(i=0; i < mass.length; i++){
    if (mass[i] > 0) {positive ++}
    if (mass[i] % 2 == 0) {chet ++}
    summa += mass[i]
}
console.log("Наш массив кратный 3 = ",mass)
console.log(`Сумма всех элементов массива = ${summa}`)  
console.log(`Кол-во положительных чисел = ${positive}`)
console.log(`Кол-во чётных чисел чисел= ${chet}`)

