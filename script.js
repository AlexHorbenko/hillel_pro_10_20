/* 1. Створити клас Людина.
Властивості:
імʼя;
вік.

Методи:
конструктор, який приймає два параметри: імʼя та вік;
метод, який виводить у консоль інформацію про людину. */

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    fullInfo() {
        console.log(`${this.name} ${this.age}`);
    }
}
let user1 = new User('Alex', 42);
let user2 = new User('Eva', 21);
user1.fullInfo();
user2.fullInfo();


/* 2. Створити клас Автомобіль.
Властивості:
марка,
модель,
рік виписку,
номерний знак (або на Ваш розсуд);
власник.

Методи:
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі,
якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника */

class Auto {
    constructor(brand, model, year, plate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
        this.user;
    };
    addToUsers = function (user) {
        if (user.age > 18) {
            this.user = user;
        } else {
            console.log("Not appropraite age");
        };
    };
};

let auto1 = new Auto('Chevrolet', 'Corvette', '1978', 'D345-45');
let auto2 = new Auto('Audi', 'Quattro', '1986', 'D356-55');
auto1.addToUsers(user2);
auto2.addToUsers(user1);


/*
В якості демонстраціїї створити:
декілька екземплярів класу Людина;
декілька екземплярів класу Автомобіль;
присвоїти власників автомобілям.*/