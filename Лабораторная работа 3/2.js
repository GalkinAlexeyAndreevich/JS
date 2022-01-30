let name = "Alexey"
let surname = "galkin"
name1 = name.substr(0,1);
name2 = name.substr(1);
surname1 = surname.substr(0,1);
surname2 = surname.substr(1);
name3 = name1.toUpperCase() + name2.toLowerCase();
surname3 = surname1.toUpperCase() + surname2.toLowerCase();
console.log(name3);
console.log(surname3);
name === name3? console.log("Изменений в имени не произошло"):console.log("Изменения в имени произошли");
surname === surname3? console.log("Изменений в фамилии не произошло"):console.log("Изменения в фамилии произошли");