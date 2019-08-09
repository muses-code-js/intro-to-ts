/**
 * Exercise 3.a: set types of the classes and methods
 */
class Calculator {
    add = (n1: number, n2: number): number => n1 + n2;

    subtract = (n1: number, n2: number): number => n1 + n2;

    multiply = (n1: number, n2: number): number => n1 * n2;

    divide = (n1: number, n2: number): number => n1 / n2;
}

interface Address {
    street: string;
    suburb: string;
    postcode: number;
    state: string;
    country: string;
}

/**
 * Exercise 3.b: Add types and create interfaces for Person and Employee
 */
abstract class Person {
    private readonly _firstName: string; // should be readonly
    private readonly _lastName: string; // should be readonly

    protected age: number;
    protected readonly gender: string; // should be readonly

    public address: string;

    get name(): string {
        return `${this._firstName} ${this._lastName}`;
    };

    constructor(firstName: string, lastName: string, age: number, gender: string, address: IAddress) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    abstract getAddress(): IAddress; // Interface IAddress

    abstract getAge(): string; // Eq: Hello, my age is 18
}

class Employee extends Person {
    profession;

    constructor(firstName: string, lastName: string, age: number, gender: string, address: IAddress) {
        super(firstName, lastName, age, gender, address);

        this.profession = profession;
    }

    getName(): string {
        return `Hello, my name is ${this.name}`;
    }

    getProfession(): string {
        return `Hello, my profession is ${this.profession}`;
    }

    getAddress(): IAddress {
        return this.address;
    }

    getAge(): string {
        return `Hello, my age is ${this.age}`;
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
