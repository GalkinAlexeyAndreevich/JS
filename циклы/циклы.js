let mass = []
let n = 40
let m = -5
let count = 42
let i = 0
while(i < count){
    num = Math.random()*Math.abs(m-n) + Math.min(n,m)
    mass.push(num)
    i++
}
console.log(mass)