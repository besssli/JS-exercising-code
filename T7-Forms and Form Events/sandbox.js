const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
const username = form.username.value;
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation     
    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'That username is valid!';
    }else{
        //feedback help info
        feedback.textContent = 'Username must content only and be between 6 to 12 characters long '
    }
});


//live feedback
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    console.log(e);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }else{
        form.username.setAttribute('class', 'error');        
    }
});


/// Testing RegEx
// const username = '@novatdi';
// const pattern = /[a-z]{6,}/;

// let result = pattern.test(username);

// if(result){
//     console.log('regEx test passed ;)');
// }else{
//     console.log('regEx test failed :(');
// }

// let result = username.search(pattern);
// console.log(result);