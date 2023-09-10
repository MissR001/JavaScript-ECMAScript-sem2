/*
Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел)
*/

class Employee {
  name = "Name";
  displayInfo() {
    console.log("Name");
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super();
    this.name = name;
    this.department = department;
  }
  displayInfo() {
    console.log(`Manager ${this.name} works is the ${this.department}`);
  }
}

const Manager = new Manager("Oleg", "finance");
Manager.displayInfo();
delete Manager.name;
Manager.displayInfo();


/*
Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится 
студент.
Метод displayInfo() - выводит информацию о студенте 
(имя, возраст и класс).
javascript
*/

class Student {
    constructor(name, age, class) {
        this.name = name;
        this.age = age;
        this.class = class;
    }
    displayInfo(){
        console.log(`My name is ${this.name}. I am ${this.age} y.o. I am ${this.class}`);
    }
}

const Student1 = new Student('Oleg, 21');
Student1.displayInfo();