function createNumber(mass, n){
	mass = []
    for(let i=0; i<n; i++){
        let num = i
        mass.push(num,num)
    }
    return mass
}
function RandArr(mass){
	for(let i=mass.length-1; i>0;i--){
		let j = Math.floor(Math.random()*(i+1))
		let t = mass[i]
		mass[i] = mass[j]
		mass[j] = t
	}
}
export{createNumber, RandArr}