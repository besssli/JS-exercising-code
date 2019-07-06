// timestamps

const before = new Date('February 9 2019 3:05:45');
const now = new Date();

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff/ 1000/ 60);
const hours = Math.round(mins/ 60);
const days = Math.round(hours/ 24);

console.log(mins, hours, days);

// converting timestamp into date object
const timestamp = 1675938474990;

console.log(new Date(timestamp));
