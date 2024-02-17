const score=900
console.log(score);

const balance =new Number(5);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precison 5.00

const otherNumber=123.8999
console.log(otherNumber.toPrecision(2));

const hundreds= 100000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++  Maths ++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(6.6)); //6
console.log(Math.min(1,4,5,6)); //1
console.log(Math.max(4,5,6,5)); //6

console.log(Math.random()); // 0 to 1
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max =20

console.log(Math.floor(Math.random() * (max -min +1))+ min)
