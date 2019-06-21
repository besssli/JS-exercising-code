/// primitive values

let scoreOne = 100;
let scoreTwo = scoreOne;

console.log(`scoreOne : ${scoreOne}, scoreTwo : ${scoreTwo}`);

scoreOne = 50;
console.log(`scoreOne : ${scoreOne}, scoreTwo : ${scoreTwo}`);

/// reference values

userOne = {name:'Ryu', age:30};
userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 35;
console.log(userOne, userTwo);