// constructor fuction
function User(userName, email){
    this.userName = userName;
    this.email = email;
}

User.prototype.login = function(){
    console.log(`${this.userName} has logged in`)
    return this
};

User.prototype.logout = function(){
    console.log(`${this.userName} has logged out`)
};

function Admin(userName, email, title){
    User.call(this, userName, email);
    this.title = title;
};

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    //delete User
};

const userOne = new User('mario', 'mario@giligruala.com');
const userTwo = new User('justin', 'justin@giligruala.com');
const userThree = new Admin('bess', 'bess@giligruala.com', 'CEO');

console.log( userOne, userTwo, userThree);
userOne.login().logout();
