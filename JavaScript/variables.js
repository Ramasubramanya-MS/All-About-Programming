console.clear();

let num1=10;
console.log(num1);

let name = "Srila Prabhupada"
let isOldEnough = false;
let marks = [9,10,9.5];
let blogObj = {
  title: 'Blog Title 1',
  description: 'lorem ipsum dolor'
}

const num2 = 20;
console.log(name,"\nIs Srila Prabhupada Old?",isOldEnough);
console.log("Array of various number types:",marks);
console.log("An array of text:",blogObj);

/*---Template Strings---*/
const name1 = 'Jhon';
const firstName = 'John';
const lastName = 'Lark';
const mGreetings = `${name1} Says hello `;
console.log(mGreetings);
/* Using Function*/
  function getFullname(firstName,lastName) {
    return `${firstName} ${lastName}`;
  }
  const mGreeting = `${getFullname(firstName,lastName)} says Hello `;
  console.log(mGreeting);
/* Advantage */
let red = 200;
let green = 155;
let blue = 100;
let alpha = 0.8;
const rgbaExp = `rgba(${red},${green},${blue},${alpha})`;
console.log(rgbaExp);

/* ---Arrow Functions--- */
const mGreet = name2 => `Welcome ${name}`//useful in one variables
console.log(mGreet('John'));
//more than one variable
const mGreets = (name2, age) => {
  return `Welcome ${name2} ${age}`
}
console.log(mGreets('jhon','23'));
const mSum = (num1,num2) => console.log(num1+num2);
mSum(1,2,3,4,5);//prints 3 and ignores 3,4,5

/*Rest Operator???->call functions with any arguements*/
const mSum1 = (...args) => console.log(args);
mSum1(1,2,3,4,5);
const mSum2 = (num4,num5,...args1) => {
  let sum = num4+num5;//sum=0->sum=42->how?->args has 3,4,5,6,7,8,9 and
  for(let i=0; i<args1.length;i++) {
    sum += args1[i]
  }
  console.log(sum);
}
mSum2(1,2,3,4,5,6,7,8,9);

/*Spread operator*/
/*  1. To create copies of Array*/
let mArr1 = [1,2,3,4,5];
let mArr2 = [...mArr1];//mArr2 is copy of mArr1
mArr2.push(6);

console.log("mArr1 is original", mArr1);
console.log("mArr2 is copy in mArr1 with editing",mArr2,", !arr1 is not edited");
/* 2. To concat arrays*/
let mArr3 = [6,7,8];
let mArr4 = [...mArr1,...mArr3];//Sequence matters
console.log("Concatenated array",mArr4);
let mArr5 = [0,...mArr1,...mArr3,10];//can add at begiining or end
console.log("Concatenated array",mArr5);
//works on objects also
let mObj1 = {
  name: 'John',
  lastname: 'von Neuman'
}
let mObj2 = {
  age: 28
}
let mObj3 = {...mObj1, ...mObj2}
console.log(mObj3);

/*Destructring*/
const name3 = "John Manuel Lark";
const nameArr = name3.split(' ');

console.log(nameArr);
//let firstName = nameArr[0];
//let middlename = nameArr[1];

let [firstName1,middleName1,lastName1] = nameArr;
console.log(firstName1);
console.log(middleName1);
console.log(lastName1);
//Can be used for objects also
const person = {
  firstName2: 'John',
  middleName2: 'Manuel',
  lastName2: 'Lark',
  age2:28
}
let {lastName2, firstName2} = person;

console.log(firstName2);
console.log(lastName2);//variables get matched to Keys->order does not matter
//can be used to create new objects
let firstName3 = 'John';
let lastName3 = 'Lark';
let age = 28;

const personObj = {
  first: lastName3,
  last: firstName3,
  age: age//order matters
}
console.log(personObj);
