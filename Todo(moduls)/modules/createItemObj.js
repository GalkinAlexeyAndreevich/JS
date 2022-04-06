function createItemObject(arr,id,value){
    const obj = {}
    obj.id = id
    obj.name = value
    obj.done = false
    arr.push(obj)
}
export {createItemObject}