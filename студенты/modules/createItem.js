import { checkBirthday} from "./checkBirthday.js"
import { checkYearBegin} from "./checkYearBegin.js"
export function createItem(massInput1){
    let obj = {};
    let check = true
    for (let i = 0; i < massInput1.length; i++) {
      let classInput = "." + massInput1[i].class;
      const input = document.querySelector(classInput);

      // Проверки
      let inputValue = input.value.trim();
      // if (!inputValue.length) {
      //    alert(massInput1[i].placeholder);
            // check = false
      //    return check;
      // }
      // проверка даты рождения
      if (massInput1[i].nameObj == "birthday" && check) {
        inputValue = checkBirthday(inputValue)
      }
      // проверка года поступления
      if (massInput1[i].nameObj == "yearBegin" && check) {
        inputValue = checkYearBegin(inputValue)
      }
      if(!check || !inputValue){
          return
      }
      obj[massInput1[i].nameObj] = inputValue;
    }
    return obj
}    
    