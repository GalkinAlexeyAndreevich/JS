export function createForm(massInput) {
  const myForm = document.createElement("form");
  myForm.classList.add("myForm");
  const title = document.createElement('h1')
  title.textContent = "Добавить нового студента"
  title.classList.add("title")
  myForm.append(title)
  // container.append(title)
  
  // Создание инпутов
  for (let i = 0; i < massInput.length; i++) {
    const input = document.createElement("input");
    input.classList.add(massInput[i].class);
    input.placeholder = massInput[i].placeholder;
    if (massInput[i].nameObj == "birthday") {
      input.type = "Date";
    }
    myForm.append(input);
  }

  // Кнопка отправить
  const butSubmitForm = document.createElement("button");
  butSubmitForm.classList.add("butSubmitForm");
  butSubmitForm.textContent = "Отправить форму";
  myForm.append(butSubmitForm);
  // container.append(myForm);
  return myForm;
}
