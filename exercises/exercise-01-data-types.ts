/**
 * Exercise 1: annotate data types such as string, date, number and array
 */

const firstName = "John";
const lastName = "Doe";
const age = 18;
const gender = 'male';
const birthday = new Date(1991, 11, 25);
const yearsOfExperience = "5";
const profession = 'Web Developer'
const languages = ['JavaScript', 'NodeJS', 'TypeScript'];
const frameworks = Array("React", "Vue", "Angular");
const address: Address = {
    street: "123 George St",
    suburb: 'Sydney',
    "postcode": 2000,
    state: "NSW",
    country: 'Australia'
}
const isEmployee = true

interface Address {
    street: string;
    suburb: string;
    postcode: number;
    state: string;
    country: string;
}
