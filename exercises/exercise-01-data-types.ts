/**
 * Exercise 1: annotate data types such as string, date, number and array
 */

const firstName: string = "John";
const lastName: string = "Doe";
const age: number = 18;
const gender: string = 'male';
const birthday: Date = new Date(1991, 11, 25);
const yearsOfExperience: string = "5";
const profession: string = 'Web Developer';
const languages: string[] = ['JavaScript', 'NodeJS', 'TypeScript'];
const frameworks: Array<string> = Array("React", "Vue", "Angular");
const address: Address = {
    street: "123 George St",
    suburb: 'Sydney',
    "postcode": 2000,
    state: "NSW",
    country: 'Australia'
}
const isEmployee: boolean = true;

interface Address {
    street: string;
    suburb: string;
    postcode: number;
    state: string;
    country: string;
}
