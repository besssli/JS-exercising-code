// reduce method
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 50){
//         acc++;
//     };
//     return acc;
// }, 0);

// console.log(result);


const scores = [
    {name: 'mario', score: 50},
    {name: 'tina', score: 70},
    {name: 'mario' ,score: 60},
    {name: 'jashun', score: 45}
];

const marioTotal = scores.reduce((acc, curr) => {
    if(curr.name === 'mario'){
        acc += curr.score
    };
    return acc;
}, 0);

console.log(marioTotal);