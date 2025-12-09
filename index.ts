
// let personName: string = "John Doe";
// const isLogin: boolean = true;
// const n: number = 5;
// console.log(isLogin);
// console.log(n);

// personName = "anuj kumar";

// console.log(personName);

// const person: {name: string,course:string, roll:number } = {name:'anuj', course:'bca', roll:12};
// console.log(person);


// const addsum = (a:string, b: number) => {
//     console.log(`${a} ${b}`);
// }

// addsum('hello',45);
interface Bank{
    name: string;
    address: string;
    accountType:string;
}

interface Car{
    name: string;
    model: string;
}

const a: Bank = {
    name: "NMB",
    address: "kathmandu",
    accountType: "saving"
}