export function checkYearBegin(inputValue){
  let now = new Date()
  let check = true
  if (
    !Number(inputValue) ||
    inputValue < "2000" ||
    inputValue > now.getFullYear()
  ) {
    alert("Год поступлеления выходит за диапозон(от 2000 до сегодня)");
    check = false
    return check;
  }

  let diaposon = `${inputValue}-${Number(inputValue) + 4}`;
  let kurs = now.getFullYear() - inputValue;
  if (kurs > 4) {
    inputValue = `${diaposon} (Закончил)`;
  } else {
    inputValue = `${diaposon} (${kurs} курс)`;
    console.log(diaposon, kurs);
  }
  return inputValue
}
