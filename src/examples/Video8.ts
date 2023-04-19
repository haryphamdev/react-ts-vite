let name1: number = 10; // => tự động đoán: string


type TEmployee = {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string
}

let employee: TEmployee = {
    firstName: 'Eric',
    lastName: 'Pham',
    age: 25,
    jobTitle: 'Web Developer'
};

interface IEmployee {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string
}

let employee1: IEmployee = {
    firstName: 'Eric',
    lastName: 'Pham',
    age: 25,
    jobTitle: 'Web Developer'
};





