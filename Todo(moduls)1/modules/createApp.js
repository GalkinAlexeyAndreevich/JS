"use strict";
import { createAppTitle } from "./title.js";
import { createTodoItemForm } from "./form.js";
import { createTodoList } from "./list.js";
import { createTodoItem } from "./item.js";
import { doneTodoItem, deleteTodoItem } from "./buttons.js";
import { createItemObject } from "./createItemObj.js";

function createTodoApp(container, title, localArr, key) {
  const appTitle = createAppTitle(title);
  const appForm = createTodoItemForm();
  const appList = createTodoList();

  container.append(appTitle, appForm.form, appList);

  async function getValue() {
    const response = await fetch("http://localhost:3000/api/todos");
    const data = await response.json();
    for (let obj of data) {
    }
    console.log(data);
  }
  getValue();
  // function getValue(){
  //     let request = await fetch("http://localhost:3000/api/todos", {
  //     method: "POST",
  //     body: JSON.stringify({
  //     name: appForm.input.value,
  //     owner: "father",
  //     }),
  // }
  //   if (localStorage.getItem(key)) {
  //     localArr = JSON.parse(localStorage.getItem(key));

  //     for (let obj of localArr) {
  //       const todoItem = createTodoItem(obj.name);
  //       todoItem.todoItem.id = obj.id;
  //       if (obj.done == true) {
  //         todoItem.todoItem.classList.add("list-group-item-success");
  //       } else if (obj.done == false) {
  //         todoItem.todoItem.classList.remove("list-group-item-success");
  //       }

  //       doneTodoItem(todoItem.doneBtn, todoItem.todoItem, localArr, key);
  //       deleteTodoItem(todoItem.deleteBtn, todoItem.todoItem, localArr, key);

  //       appList.append(todoItem.todoItem);
  //       todoItem.todoItem.append(todoItem.divBtn);
  //     }
  //   }
  appForm.form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const todoItem = createTodoItem(appForm.input.value);

    if (appForm.input.value.trim().length == 0) {
      return;
    }
    async function postItem() {
      let request = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        body: JSON.stringify({
          name: appForm.input.value,
          owner: "father",
        }),
      });
      const data = await request.json();
      console.log(data);
    }
    postItem();

    doneTodoItem(todoItem.doneBtn, todoItem.todoItem, localArr, key);
    deleteTodoItem(todoItem.deleteBtn, todoItem.todoItem, localArr, key);

    // createItemObject(localArr, todoItem.todoItem, appForm.input.value);

    // localStorage.setItem(key, JSON.stringify(localArr));
    // console.log(JSON.parse(localStorage.getItem(key)));

    appList.append(todoItem.todoItem);
    appForm.input.value = "";
    appForm.addButton.disabled = !appForm.addButton.disabled;
  });
}
export { createTodoApp };
