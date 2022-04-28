const input = document.querySelector(".input");
const list = document.querySelector("#datalist_id");

let mass = ["Россия", "Республика Комми", "Румыния", "Калмыкия", "Германия"];
input.addEventListener("input", () => {
  list.innerHTML = "";
  let input_word = input.value;
  input_word = input_word.toLowerCase();
  for (let word of mass) {
    if (word.toLowerCase().startsWith(input_word)) {
      console.log(word);
      const option = document.createElement("option");
      option.textContent = word;
      list.append(option);
    }
  }
});
list.addEventListener("click", (e) => {
  console.log("нажали");
  input.value = e.target.textContent;
  list.innerHTML = "";
});
