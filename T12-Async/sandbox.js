// async & await

const getTodos = async () => {
    const response = await fetch('todos/sally.json');
    if(response.status !== 200){
        throw new Error('can not fetch the data');

    }
    const data = await response.json();
    return data;

};
console.log(1);
console.log(2);

getTodos()
    .then(data => {console.log('resolved:', data);})
    .catch(err => console.log('rejected:', err.message));
console.log(3);
console.log(4);

// fetch('todos/mario.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });

