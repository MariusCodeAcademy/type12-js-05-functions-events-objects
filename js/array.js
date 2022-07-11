const u1 = 'James';
const u2 = 'Serbentautas';
const u3 = 'Bordiuras';

// Array lietuvsai Masyvas
//                0          1               2
const names = ['James', 'Serbentautas', 'Bordiuras'];
console.log('names ===', names);
console.log(names[1]);

// skaiciu masyvas

let numbers = [1, 5, 9, 12];
console.log('numbers ===', numbers);
console.log(numbers[3]);

// ivairiu tipu pasyvas
//              0     1      2     3       4
const mixed = [45, 'James', true, null, [5, 6]];
console.log('mixed ===', mixed);
console.log('mixed[4,1] ===', mixed[4][1]);

const matrix = [
  [1, 2, 3, 4], // i===0
  [5, 6, 7, 8], // i===1
  //0  1  2   3
  [9, 10, 11, 12], // i===2
];

console.log('(matrix[2])[2] ===', matrix[2][2]);
console.log('(matrix[2])[2] ===', matrix[1 + 1][2]);

// Colors
const colors = ['red', 'green', 'blue', 'violet', 'black'];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);

for (let i = 0; i <= 2; i++) {
  // console.log('i ===', i);
  console.log(colors[i]);
}

// Array length

numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 521];
console.log('numbers ===', numbers);
console.log('numbers.length ===', numbers.length);
// atspausdinti paskutini elementa bet kokio ilgio masyve
console.log('numbers[numbers.length - 1] ===', numbers[numbers.length - 1]);

// atspausdinti visus skaicius is bet kokio ilgio masyvo
for (let i = 0; i < numbers.length; i++) {
  console.log(`skaicius ${numbers[i]}`);
}
