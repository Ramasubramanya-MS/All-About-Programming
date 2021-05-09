console.clear();
/*classes-> To create object factories, you can use the class keyword.
Just like you would do in other programming languages like Java...*/
/* Syntax:
class ClassName {
  constructor() {
    //Initialze the properties here
  }
  //Methods outside constructor
  methods1 = () => {
    //Methods body
  }
}
*/
class Person {
  constructor(name,birthYear) {
    this.name = name;
    this.yearofBirth = birthYear;
  }
  getDetails = () => {
    return `Name: ${this.name} and Age: ${2021-this.yearofBirth}`
  }
}
var john = new Person('John', 1990);
console.log(john.getDetails());
/*Inheritance-> Uses keyword called extends*/
/*Syntax -> class ChildClass{
  //Class body
}
class ChildClass extends ParentClass {
  //Class body
}
*/
class Pilot extends Person{
  constructor(exp,type,license) {
    super('John Wick','1980');//calling parent class constructor and passing values
    this.expereience = exp;
    this.type = type;
    this.license = license;
  }
  getData = () => {
    console.log(`${this.getDetails()} and expereience ${this.expereience} and Type: ${this.type}`)
  }
}
const john1 = new Pilot(28,'private','TX1234');
console.log(john1);
john1.getData();
//Passing values from new
class Pilot1 extends Person{
  constructor(name,birthYear,exp,type,license) {
    super(name,birthYear);//calling parent class constructor and passing values
    this.expereience = exp;
    this.type = type;
    this.license = license;
  }
  getData = () => {
    console.log(`${this.getDetails()} and expereience ${this.expereience} and Type: ${this.type}`)
  }
}
const clair = new Pilot1('Clair Willims','1979',28,'private','TC1234');
console.log(john1);
clair.getData();
const toto = new Pilot1('Toto Wolff','1991',11,'commercial','TN1234');
console.log(toto);
toto.getData();
/* Promises*/
/*Syntax-> const mPromise = new Promise((resolve,reject)=> {
  //Promise body
  //call resolve() when the operation is complete
  //call reject() when the operation is failed.
})*/
const postListPromise = new Promise((resolve,reject) => {
  $.get('https://jsonplaceholder.typicode.com/posts',(data)=> {//https://jsonplaceholder.typicode.com/posts
    console.log('GET POSTS LIST Response => ',data);
    resolve(data);
  }).fail(err => {
    reject(new Error(`Call failed for GET POST List Request with Status ${err.status}`))
  })
})
/*then() method is called when the resolve() is executed. It receives data passed
in the resolve() method as arguements*/
/*catch() method is caled when the reject() method is executed. It receives the data passed
in the reject() method as arguments*/
postListPromise
.then(() => {
  console.log('Call Success');
})
.catch((error) => {
  console.log('Call Failed');
  console.log('Catch Error => ',error);
})
/*Callbacks and Async Operations
In Javascript the code is executed line-by-line in a sequence so
when we run a parallel operation or asynchronus Operation
like fetching data from backend, JavaScript doesn't wait for the
response it simply executes the next line of code.
We give the asynchronus operation a function to call when it is compleeted.
This function is called a Callback Function*/
let list = [];
$.get('https://jsonplaceholder.typicode.com/posts',(response)=> {
  console.log(response);

  const id = 1;
  $.get(`https://jsonplaceholder.typicode.com/posts/${id}`,(response)=> {
    console.log(response);

    $.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,(response) => {
      console.log(response);
    }).fail(err => {
      console.log(err);
    })
  }).fail(err => {
    console.log(err);
  })
}).fail(err => {
  console.log(err);
})
console.log(list);
/* Promise-> A promise is used to handle the asynchronus of an operation.
It defers the execution of a code block until an asynchronus request is completed.
This way, other operations can keep running without interruption*/
/*A promise has 3 states:
-Pending: It means the operation is going on.
-Fulfilled: It means the operation was completed.
-Rejected: It means the operation did not complete and an error can be thrown*/
