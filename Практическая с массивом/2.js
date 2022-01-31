let mass = []
let chet_and_positive = 0
// let positive = 0
// let chet = 0
for ( let i = 0; i < 6; i++ ) {
    mass.push(Math.round( Math.random() * 200 ) - 100)
    if (mass[i] % 2 == 0 && mass[i] > 0) {chet_and_positive ++}
    // if (mass[i] % 2 == 0) {chet ++}
    // if (mass[i] > 0) {positive ++}
}
console.log("Наш массив = ",mass)
console.log(`Кол-во положительных и чётных чисел = ${chet_and_positive}`)
// console.log(`Кол-во положительных чисел = ${positive}`)
// console.log(`Кол-во чётных чисел чисел= ${chet}`)