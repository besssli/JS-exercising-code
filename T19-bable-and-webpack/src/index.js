import {styleBody, addTitle} from './dom';
import users, {getPremUsers} from './data';

const premUsers = getPremUsers(users);
console.log(users, premUsers);

console.log('test 3');