class User{
    constructor( userName, email){
        this.userName = userName;
        this.email = email;
        this.score = 0;
    }
    login(){
        console.log(`${this.userName} just logged in`)
        return this;
    }
    logout(){
        console.log(`${this.userName} just logged out`)
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.userName} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User{
    constructor( userName, email, title){
        super( userName, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.userName !== user.userName);
    }
}
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it blinds a value of 'this' to the new empty object
// 3 - it calls the constructor function to build the object
const userOne = new User('mario', 'mario@giligruala.com');
const userTwo = new User('justin', 'justin@giligruala.com')
const UserThree = new Admin('bess', 'bess.li@giligruala.com', 'CEO')
console.log( userOne, userTwo);

let users = [userOne, userTwo, UserThree];
console.log(users);

UserThree.deleteUser(userTwo);
console.log(users);

console.log(UserThree);


