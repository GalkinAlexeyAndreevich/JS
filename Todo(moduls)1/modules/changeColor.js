"use strict"
function changeItemDone(arr, item){
    arr.map(obj => {
        if (obj.id === item.id & obj.done === false) {
            console.log("теперь true")
            obj.done = true;
        } else if (obj.id === item.id & obj.done === true) {
            console.log("теперь false")
            obj.done = false;
        }
    });
}
export {changeItemDone}