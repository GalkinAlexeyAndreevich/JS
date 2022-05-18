"use strict";
import { createAppTitle } from "./title.js";
import { createTodoItemForm } from "./form.js";
import { createTodoList } from "./list.js";
import { createTodoItem } from "./item.js";
import { doneTodoItem, deleteTodoItem } from "./buttons.js";
import { createItemObject } from "./createItemObj.js";

function createTodoApp(container, title, data, key) {
  const appTitle = createAppTitle(title);
  const appForm = createTodoItemForm();
  const appList = createTodoList();

  container.append(appTitle, appForm.form, appList);

  async function getValue(key,data) {
    let request = await fetch("http://localhost:3000/api/todos");
    data = await request.json();
    for (let obj of data) {
      if(obj.owner != key) continue
      const todoItem = createTodoItem(obj.name);
      todoItem.todoItem.id = obj.id;
      if (obj.done == true) {
        todoItem.todoItem.classList.add("list-group-item-success");
      } else if (obj.done == false) {
        todoItem.todoItem.classList.remove("list-group-item-success");
        }
        doneTodoItem(todoItem.doneBtn, todoItem.todoItem, data,key);
        deleteTodoItem(todoItem.deleteBtn, todoItem.todoItem);
        appList.append(todoItem.todoItem);
        todoItem.todoItem.append(todoItem.divBtn);
    }
  }
  getValue(key,data);
 
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
          owner: key,
        }),
      });
      const answer = await request.json();
      console.log(answer);
    }
    postItem();

    doneTodoItem(todoItem.doneBtn, todoItem.todoItem, data,key);
    deleteTodoItem(todoItem.deleteBtn, todoItem.todoItem);

    appList.append(todoItem.todoItem);
    appForm.input.value = "";
    appForm.addButton.disabled = !appForm.addButton.disabled;
  });
}
export { createTodoApp };
