const marvel_heros=["thor","ironman","spiderman"];
const dc=["superman","flash","batman"]
// push array ke andar array

//const allheros= marvel_heros.concat(dc);
//console.log(allheros);

// spread method
const allheros=[...marvel_heros,...dc]
console.log(allheros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=anotherarray.flat(Infinity);
console.log(real_another_array);
//is array
console.log(Array.isArray("prikshit"));
console.log(Array.from("prikshit"));

//+++++++Interesting case+++++++

console.log(Array.from({name :"prikshit"}));

let score1=100;
let score2=200;
let score3=900;
console.log(Array.of(score1,score2,score3));