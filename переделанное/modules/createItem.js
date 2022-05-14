import { checkBirthday} from "./checkBirthday.js"
import { checkYearBegin} from "./checkYearBegin.js"
export function createItem(massInput1){
    let obj = {};
    obj.fio = ""
    let check = true
    for (let i = 0; i < massInput1.length; i++) {
      let classInput = "." + massInput1[i].class;
      const input = document.querySelector(classInput);

      // Проверки
      let inputValue = input.value.trim();
      if (!inputValue.length) {
         alert(massInput1[i].placeholder);
         return false;
      }
      // проверка даты рождения
      if (massInput1[i].nameObj == "birthday") {
        inputValue = checkBirthday(inputValue)
      }
      // проверка года поступления
      if (massInput1[i].nameObj == "yearBegin") {
        inputValue = checkYearBegin(inputValue)
      }
      if(inputValue === false){
        return false
      }
      if(i<3){
        obj.fio += inputValue + " "
        console.log("Фио", obj.fio)
      }
      else{
        obj[massInput1[i].nameObj] = inputValue;
      }
      
    }
    console.log("результат:", obj)
    return obj
}    
    