/* 1. map(): Iterates the array for is amd we can pass a callback function
to perform some operation on each array item. The updated values
can be returned by the callback function to create a new array,*/
console.clear();

const mArr = [1,2,3,4,5];

// let newArr = [];
// const doubleValues = (item) => {
//   return item*2
// }
//
// for(let i=0;i<mArr.length;i++) {
//     newArr.push(doubleValues(mArr[i]))
// }
let newArr = mArr.map((item,i) => {
  console.log(`Item at pos: ${i} is ${item}`);
  return item*2;
});

console.log(mArr);
console.log(newArr);
//works on objects also
const m_arr1 = [
  {
  name: 'John Lark',
  expereience: 10,
  type: 'Commercial'
  },
  {
  name: 'John Doe',
  expereience: 15,
  type: 'Private/Public'
  },
  {
  name: 'John Lark',
  expereience: 7,
  type: 'Public'
  }
];
let newArr1 = m_arr1.map((data, pos) => {
  console.log(data);//prints all
  return{
    name: data.name,
    expereience: data.expereience//prints only name and expereience
  };

});
console.log(m_arr1);
console.log(newArr1);
/*2. reduce -> just like map(), reduce() also iterates through the entire array
and it accepts a callback function to perform some action on the array element. The difference
here is that reduce() passes the result of the callback from one iteration to the next one.
This callback result is called accumulator. The accumulator can be pretty much anything(integer,
string, object or even an array) and must be instantiated and passed when calling reduce().*/
const numArr1 = [1,2,3,4,5];
const result = numArr1.reduce((acc, item) =>{
  console.log(item);
  console.log(acc);
  return acc+item;
},0)//accumulator
console.log(result);
//works of objects also
const result1 = m_arr1.reduce((acc1,item1) => {
  console.log(item1);
  return acc1+item1;
},0)
console.log(result1);
const result2 = m_arr1.reduce((acc2,item2) => {
  console.log(item2.expereience);
  return acc2+item2.expereience;
},0)
console.log(result2);//adds the expereience
/*3. It iterates through the array to create a new array. You can decide
which elements should be added in the new array based on some conditions.*/
/*true tells to add false to skip*/
const numArr2 = [1,2,3,4,5,6,7,8,9];
const result3 = numArr2.filter(item3 => {
  console.log(item3);
  return item3%2 !== 0;///=== for true
})
console.log('Result Arr => ', result3);
//works for objects also
const result4 = m_arr1.filter(item4 => {
  console.log(item4.expereience);
  return item4.expereience >= 11;///=== for true
})
console.log('Result Arr => ', result4);
/*4. find()-> used to search for an element in the array
that matches some condition. It returns the first element
that matches the condition*/
/*findIndex()-> returns the indes of element instead of
element itself*/
const numArr3 = [-1,-2,-3,-4,1,2,3,4];
const result5 = numArr3.find(item5 => {
  return (item5 %2 === 0 && item5 >0);
})
console.log("Result => ",result5);
const result6 = numArr3.findIndex(item6 => {
  return (item6 %2 === 0 && item6 >0);
})
console.log("Result => ",result6);
