export function sortClients(arr,prop,dir){
    const arrClientsCopy = [...arr]
    return arrClientsCopy.sort(function(clientA, clientB){
        if(dir?clientA[prop] <  clientB[prop]:clientA[prop] > clientB[prop])
        return -1
    })
}