// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');

const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }else if(para.textContent.includes('succes')){
        para.classList.add('succes');
    }
});
const title = document.querySelector('.title');

title.classList.toggle('test');