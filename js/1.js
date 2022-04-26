const input = document.querySelector(".input");
const list = document.querySelector(".list");
let mass = ["Россия", "Республика Комми", "Румыния", "Калмыкия", "Германия"];
input.addEventListener("input", () => {
  list.innerHTML = "";
  for (let word of mass) {
    if (
      (word.startsWith(input.value.toLowerCase() + input.value.slice(1)) ||
        word.startsWith(input.value[0].toUpperCase() + input.value.slice(1))) &&
      input.value
    ) {
      console.log(word);
      const div = document.createElement("div");
      div.textContent = word;
      list.append(div);
    }
  }
});
list.addEventListener("click", (e) => {
  input.value = e.target.textContent;
  list.innerHTML = "";
});
