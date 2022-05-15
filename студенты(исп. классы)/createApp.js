import { Student } from "./modules/student.js"
import { createForm } from "./modules/form.js";
import { getValue } from "./modules/studentValidate.js";
import { createSearchForm } from "./modules/searchForm.js";
export function createApp(container,localArr, key){

    let arrStudents  = []

    if (localStorage.getItem(key)) {
        localArr = JSON.parse(localStorage.getItem(key));
        for(const obj of localArr){
            arrStudents.push(new Student(
                obj.surname, 
                obj.name,
                obj.patronymic ,
                new Date(obj.birthday),
                obj.yearBegin,
                obj.faculty)
            )
        }
        
    }
    else{
        // Массив студентов
        arrStudents = [
            new Student('Galkin', 'Alexey', 'Andreevich', new Date('2004,07,30'), '2020' ,'programmer'),
            new Student('Dvoyneshev', 'Roman', 'Eduardovich', new Date('2004,02,13'), '2020', 'programmer'),
            new Student('Ivanov', 'Ivan', 'Ivanovich', new Date('2002,05,20'), '2017', 'installer'),
        ] 
    }


    // Постороение таблицы
    function buildTable() {
        const arrHead1 = ['ФИО','Факультет','Дата рождения','Год начала обучения']
        const arrHead2 = ["fio","faculty","birthday","yearBegin"]
        
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        table.innerHTML = ""
        table.appendChild(thead);
        table.appendChild(tbody);

        for(let i = 0; i<arrHead1.length; i++){
            const cell = document.createElement("th")
            cell.textContent = arrHead1[i]
            cell.classList.add(arrHead2[i])
            thead.append(cell)
        }

        return table
    }

    let tableStudent = buildTable()
    container.append(tableStudent)

    // Создание новой колонки таблицы
    function newStudentRow(student){
        const row = document.createElement('tr')
        const fioCell = document.createElement('td')
        const facultyCell = document.createElement('td')
        const BirthdayCell = document.createElement('td')
        const yearBeginCell = document.createElement('td')

        fioCell.textContent = student.fio
        facultyCell.textContent = student.faculty
        BirthdayCell.textContent = student.getBirthdayData() + ' (' + student.getAge() + ')'
        yearBeginCell.textContent = student.getСourse()

        row.append(fioCell,facultyCell,BirthdayCell,yearBeginCell)
        return row
    } 

    // Сортировка
    function sortStudents(prop,dir){
        const studentsCopy = [...arrStudents]
        return studentsCopy.sort(function(studentA, studentB){
            if(dir?studentA[prop] <  studentB[prop]:studentA[prop] > studentB[prop])
            return -1
        })
    }

    const searchForm = createSearchForm()
    container.append(searchForm)
    console.log(searchForm)
    for(const item of searchForm){
        item.addEventListener('input',()=>{
            if(item.value){
                consol
                prop1 = item.classList
                value1 = item.value
            }
            // console.log(item)
            // console.log(item.classList)
            // console.log(item.value)

            // filter(item.classList,item.value)
        })
    }

    // Сортировка по клику
    let column = 'fio'
    let columnDir = true
    let prop1 = 'fio'
    let value1 = ''

    function render(){
        let studentsCopy = [...arrStudents]
        studentsCopy = sortStudents(column,columnDir)

        // studentsCopy = filter('faculty','d') 
        console.log(prop1)
        console.log(value1)
        studentsCopy = filter(prop1,value1) 

        tableStudent.lastChild.innerHTML = ''
        for(const student of studentsCopy){
            tableStudent.lastChild.append(newStudentRow(student))
        }
    }

    tableStudent.firstChild.addEventListener('click', (e)=>{
        column =  e.target.classList
        columnDir = !columnDir
        render()
            
    })

    render()


    // searchForm.addEventListener('submit',(e)=>{
    //     e.preventDefault()
        

    // })
    const myForm = createForm()
    container.append(myForm.myForm)

    myForm.myForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        
        if(getValue(myForm.inputSurname) == false){
            return
        }
        if(getValue(myForm.inputName) == false){
            return
        }
        if(getValue(myForm.inputPatronymic) == false){
            return
        }
        if(getValue(myForm.inputBirthday) == false){
            return
        }
        if(getValue(myForm.inputYearBegin) == false){
            return
        }
        if(getValue(myForm.inputFaculty) == false){
            return
        }
        const surname = getValue(myForm.inputSurname)
        const name = getValue(myForm.inputName)
        const patronymic = getValue(myForm.inputPatronymic)
        const birthday = getValue(myForm.inputBirthday)
        const yearBegin = getValue(myForm.inputYearBegin)
        const faculty = getValue(myForm.inputFaculty)

        arrStudents.push(new Student(surname,name,patronymic,new Date(birthday),yearBegin,faculty))
        localStorage.setItem(key, JSON.stringify(arrStudents))

        render()

        for(let i = 0; i < 6; i++){
            myForm.myForm[i].value = ''
        }

    })

    function filter(prop,value){
        let result = []
        let copy = [...arrStudents]
        for(const item of copy){
            console.log(item)
            console.log(prop)
            if(prop == "fio"){
                console.log('это фамилия')
                let check = true
                const arrProp = ['surname', 'name', 'patronymic']
                for(const item1 of arrProp){
                    // console.log(item[item1].includes(value))
                    if(check && (String(item[item1]).includes(value) == true)){
                        console.log("Нашли")
                        result.push(item)
                        check = false    
                    }  
                }

            }
            else{
                console.log("зашли")
                if(String(item[prop]).includes(value) == true){
                    result.push(item)
                } 
            }

        }
        console.log(result)
        return result
    }
}
