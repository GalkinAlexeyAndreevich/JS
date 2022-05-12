export function buildTable(massStudents, massInput1,table) {
    // const divTable = document.createElement("div")
    // divTable.classList.add("divTable")
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    table.innerHTML = ""
    table.appendChild(thead);
    table.appendChild(tbody);
    // divTable.append(table)
  
    for (let i = 0; i < massStudents.length + 1; i++) {
      let row = document.createElement("tr");
      if (i == 0) {
        for (let j = 0; j < massInput1.length; j++) {
          let cell = document.createElement("th");
          cell.textContent = massInput1[j].nameRus;
          row.appendChild(cell);
        }
      } else {
        fillRow(i - 1, row, massStudents, massInput1);
      }
  
      thead.appendChild(row);
    }
    // const butCreateStudent = document.createElement("button")
    // butCreateStudent.textContent = "Добавить студента"
    // butCreateStudent.classList.add("butCreateStudent")
    // divTable.append(butCreateStudent)
    // return {divTable, butCreateStudent} 
    return table
  }
  function fillRow(i, row, massStudents, massInput1) {
    for (let j = 0; j < massInput1.length; j++) {
      let cell = document.createElement("th");
      cell.textContent = massStudents[i][massInput1[j].nameObj];
      row.appendChild(cell);
    }
  }