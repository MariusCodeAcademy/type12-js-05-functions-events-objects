console.log('functions');

// funkcijos aprasymas
function greet(user) {
  // function body
  console.log(`Hello ${user}!!`);
}

/*
function deklraruojam funkcija
greet = funkcijos pavadinimas
() = argumentams
user = argumentas
{} = tai kas bus vygdoma iskvietus funkcija
return = direktyva naudojam grazinti reikme ir nutraukti funkcijos vydyma
*/

// iskviesti funkcija ()
// debugger;
greet('James');
greet('Serbentautas');

// function addNumsArr(arr) {
//   console.log(arr[0]);
// }
// addNumsArr([4, 7]);
// sukurti funkcija kuri sudeda 2 reikmes
function addNums(n1, n2) {
  const sum = n1 + n2;
  console.log(`jei ${n1} sudesim su ${n2} tai gausis: ${sum}`);
  return sum;
}

// debugger;
const sum1 = addNums(10, 45);
const sum2 = addNums(100, 145);

console.log('sum1 ===', sum1);
console.log('sum2 ===', sum2);
addNums(sum1, sum2);

addNums(1, 4554);
addNums(9, 5);
addNums(110, 45);
