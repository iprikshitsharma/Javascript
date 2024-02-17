// Array
const array=[0,1,2,3,4, true,"hitesh"];
console.log(array[0]);
// shallow copy -> original same refernce
//deep copy -> not original not same reference

const Myheros=["shaktiman","nagraj"]

const myarr2= new Array(1,2,3,4);

//Methods in Array
// 1> Push
myarr2.push(8); // adding 
console.log(myarr2);
// 2> pop
myarr2.pop();
console.log(myarr2);
//3> unshift -> adding at array start
myarr2.unshift(0);
console.log(myarr2);
// 4 shift => delete from start
myarr2.shift();
console.log(myarr2);
//5> includes
console.log(myarr2.includes(3)); // boolean 
//6 indexof
console.log(myarr2.indexOf(3));
// 7 join adds and convert onto string
const myarr3= myarr2.join(); 
console.log(myarr3);
console.log( typeof myarr3);


// ++++++++slice splice +++++++
const array1=[1,2,3,4,5,6];
const myn1=array1.slice(1,3); // 0 to n-1
console.log(myn1);
console.log(array1);
const myn2=array1.splice(1,3);
console.log(myn2); // last range select hoti hai


//Difference between splice and slice
// orginal array manipulate karta (splice)
