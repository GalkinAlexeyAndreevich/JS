import {transformAge} from "./transformAge.js"
import { rusDate } from "./rusDate.js";
import { comparisonDate } from "./comparisonDate.js"
export function checkBirthday(inputValue){
    let now = new Date()
    let check = true
    console.log(inputValue)
    if (comparisonDate(inputValue, "01-01-1900")) {
    alert(`Дата рождения выходит за диапозон(01.01.1900-сегодня})`);
    check = false
    return check;
    }
    console.log("Прошли проверку")
  let age = now.getFullYear() - inputValue.slice(0, 4);
  let monthAge = now.getMonth() + 1 - inputValue.slice(5, 7);
  let dayAge = now.getDay() + 1 - inputValue.slice(8, 10);
  if (dayAge < 0) {
    monthAge -= 1;
  }
  if (monthAge < 0) {
    age -= 1;
  }
  inputValue = rusDate(inputValue).join(".");
  inputValue = `${inputValue} ( ${age} ${transformAge(age)})`
  return inputValue
}
