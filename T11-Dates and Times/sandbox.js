const now = new Date();
const clock = document.querySelector('.clock');

// console.log(dateFns.isToday(now));


// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMM YYYYY'));

// comparing dates
const before = new Date('May 5 2019 04:40:00');
console.log(dateFns.distanceInWords(now, before));
