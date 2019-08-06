/**
 * Exercise 3.a: set types of the classes and methods
 */
class Calculator {
    add = (n1, n2) => n1 + n2;

    subtract = (n1, n2) => n1 + n2;

    multiply = (n1, n2) => n1 * n2;

    divide = (n1, n2) => n1 / n2;
}



/**
 * Exercise 3.b: Add types and create interfaces for Person and Employee
 */
abstract class Person {
    private _firstName; // should be readonly
    private _lastName; // should be readonly

    protected age;
    protected gender; // should be readonly

    public address;

    get name() {
        return `${this._firstName} ${this._lastName}`;
    };

    set name({ firstName, lastName }) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    constructor(firstName, lastName, age, gender, address) {
        this.name = { firstName, lastName };
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    abstract getAddress(): IAddress; // Interface IAddress

    abstract getAge(): string; // Eq: Hello, my age is 18
}

class Employee extends Person {
    profession;

    constructor(firstName, lastName, age, gender, profession, address) {
        super(firstName, lastName, age, gender, address);

        this.profession = profession;
    }

    getName() {
        return `Hello, my name is ${this.name}`;
    }

    getProfession() {
        return `Hello, my profession is ${this.profession}`;
    }
}

// const genders = { M: 'male', F: 'female' }; // use ENUM
// const address = {
//     street: "123 George St",
//     suburb: 'Sydney',
//     "postcode": 2000,
//     state: "NSW", // use ENUM
//     country: 'Australia'
// }
// new Employe("John", 'Doe', 18, genders.M, "Web Developer", address);
