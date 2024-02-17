// ++++++++++++ Date ++++++++++++++++

let myDate =new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); // typeof object 

// let myCreateDate =new Date(2023,0,31)
let myNewDate=new Date("2024-02-24")
//console.log(myNewDate.tolocalString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getDate());