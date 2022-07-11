// Objektai tai yra {key: value} rinkinys

const userArr = ['Serbentautas', 26, 'Vilnius', 'Serbentautas@gmail'];

const user1 = {
  firstName: 'Serbentautas',
  age: 26,
  town: 'Vilnius',
  email: 'Serbentautas@gmail.com',
};

const savybe = 'email';

console.log('user1 ===', user1);
console.log('user1["firstName"] ===', user1['firstName']); // 'Serbentautas
console.log('user1.age ===', user1.age);
user1.age = 101;
console.log('user1.age ===', user1.age);

console.log('user1[savybe] ===', user1[savybe]);
