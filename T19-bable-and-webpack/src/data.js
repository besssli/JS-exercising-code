const users = [
  {name: 'mario', premium: true},
  {name: 'Dindon', premium: false},
  {name: 'Bess', premium: true},
  {name: 'Apple', premium: false},
  {name: 'Kitty', premium: true},
];

const getPremUsers = (users) => {
  return users.filter(user => user.premium);
};
export { getPremUsers, users as default};