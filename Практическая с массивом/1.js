let mass = []
let summa = 0
for ( let i = 0; i < 6; i++ ) {
    mass.push(Math.round( Math.random() * 200 ) - 100)
    summa += mass[i]
}
console.log("Наш массив = ",mass)
console.log(`Сумма всех элементов массива = ${summa}`)  