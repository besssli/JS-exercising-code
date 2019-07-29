// rest perameter
const double = (...nums) => {
  console.log(nums);
  // do something
  return nums.map(num => num*2);
}

const result = double(1,2,3,4,5,6,7,8,9);
console.log(result);

// spread syntax (array)
const people = ['Terry', 'Neomi', 'Kuma'];
const member = ['Cris', ...people];
console.log(member);

// spread syntax (object)

const person = { name: 'sherry', age: 25};
const person2 =person;
const personClone = {...person};
person.name = 'Bess';
console.log(person2);
console.log(personClone);

// set
const namesArray = ['Ryu', 'Uma', 'Bess', 'Uma'];
// console.log(namesArray);

// const nameSet = new Set(namesArray);
// console.log(nameSet);

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const age = new Set();

age.add(25);
age.add(20).add(15);
age.add(15);
console.log(age);
age.delete(15);
console.log(age);
console.log(age.has(25), age.has(15));

// symbol
const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');


console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);
console.log(symbolOne == symbolTwo);

const cookie = {};
cookie.butter = 250;
cookie['sugar'] = 150; 
cookie['sugar'] = 180; 

cookie[symbolOne] = 'but.'
cookie[symbolTwo] = 'oreo'
console.log(cookie);