/**
 * Exercise 2: set types of the function arguments
 */

function sum(number1: number, number2: number): number {
    return number1 + number2;
}
// sum(5, 10)

const square = (number: number): number => number * number;
// square(9)

function greeting(name: string): string {
    return `hello ${name}`;
}
// greeting("John Doe")

const userNames = (users: User[]): string => {
    let names = users.map(u => u.name);
    return names.join(', ');
}
// userNames([{name: 'John'}, {name: 'Jane'}])

const getDate = (date: Date): string => date.toLocaleDateString();
// getDate(new Date(1991, 11, 25))


// Example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
const createPet = function (name: string) {
    let gender;

    return {
        setName: (newName: string): string => name = newName,

        getName: (): string => name,

        getGender: function (): string {
            return gender;
        },

        setGender: (newGender: string): void => {
            if (typeof newGender === 'string' && (newGender.toLowerCase() === 'male' ||
                newGender.toLowerCase() === 'female')) {
                gender = newGender;
            }
        }
    }
}

// let pet = createPet('Vivie');
// pet.getName(); // Vivie

// pet.setName('Oliver');
// pet.setGender('male');
// pet.getGender(); // male
// pet.getName(); // Oliver

interface User {
    name: string;
}
