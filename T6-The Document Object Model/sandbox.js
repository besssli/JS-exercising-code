const ul = document.querySelector('ul');
const button = document.querySelector('button');

// button.addEventListener('click',()=>{
//     console.log('You clicked me -///-');
// });
button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'Something new to do ~';
    // ul.append(li);
    ul.prepend(li);
});

const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click',e =>{
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(item);
//         // e.target.style.textDecoration = 'line-through';
//         console.log('event in LI');
//         e.stopPropagation();// stop event bubble up to UL tag
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    // console.log('event in UL');
    if(e.target.tagName === 'LI'){
        console.log(e.target);
        e.target.remove();
    }
});
