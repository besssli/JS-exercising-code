/// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

/// get an Element by class
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

/// get an element by their tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

/// Changing page content
// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'Hello, little bear.'

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     para.innerText += ' ...';
// });
const content = document.querySelector('.content');
// console.log(content);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';
const people = ['mario', 'leo', 'jessica'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
