const name ="prikshit";
const repoCount =10;
console.log(`hi my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("prikshit");
// console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName); // primtive

console.log(gameName.charAt(0)); // p
console.log(gameName.indexOf('t')); //7


// ## Substring method in javascript
const newString =gameName.substring(0,6); // 0 to n-1
console.log(newString);
// substring ignores -ve values

const anotherString =gameName.slice(-8,4);
console.log(anotherString);
// Triming the starting and ending space
const newStringOne=" prikshit   "
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace method
const url ="https://prikshit.com/bawa@20";
console.log(url.replace('20','30'));

console.log(url.includes('prikshit')) //true

// ##split