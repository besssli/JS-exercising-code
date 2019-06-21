///regular function
// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
// };

/// arrow function
// const calcArea2 = radius => 3.14 * radius ** 2;

// const area = calcArea(5);
// const area2 = calcArea(5);
// console.log('area is : ',area);
// console.log('area2 is : ',area2);


/// practise arrow functions

// const greet = function(){
//     return 'hello there!';
// };

// const greet = () => 'hello there';
// const result = greet();
// console.log(result);


// const bill = function(products,tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i ++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([1500,17000,300], 0.08));


/// callbacks and foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function(value){
//     // do something
//     console.log(value);
// });

// let people = ['mario', 'John', 'shaun', 'baby'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

/// get a reference to 'ul'

const ul = document.querySelector('.people');

const people = ['mario', 'John', 'shaun', 'baby'];

let html = ``;

people.forEach(person => {
    //create html template
    html +=`<li style="color: purple">${person}</li>`
});

console.log(html);
ul.innerHTML = html;