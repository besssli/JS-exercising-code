const todos = [
    {text: 'go to the market', author: 'Sally'},
    {text: 'meet with allen', author: 'bess'},
    {text: 'swimming', author: 'Diana'}
];

// console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));