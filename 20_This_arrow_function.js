// this -> refers to current context
const user ={
    username:"prikshit",
    price:999,

    welcomeMessage : function (){
        console.log(` ${this.username} ,welcome to the website `);
    }
}
user.welcomeMessage();
user.username="sam"
user.welcomeMessage(); // current context changed // o/p sam
// in global context this gives empty object
// brower me global object window hota

//++++this dont work in function

// function chai(){
//     let username="prikshit";
//     console.log(this.username);
// }
// chai();

const chai =()=>{
    let username="hitesh";
    console.log(this);
}
chai();

// const addTWo= (num1,num2)=>{
// return num1+num2;
// }
// const ans =addTWo(1,2);
// console.log(ans);

// implicit return for arrow function > no use of return keyword
// ++++++ curly braces me return likna hota , normal braces me return ni hota
const addwto=(num1,num2)=> (num1+num2)
console.log(addwto(1,2));

// fro object implicit
// const addwto=(num1,num2)=> ({username:"prikshit"})

const myArray=[1,2,3,4];
myArray.forEach(()=>{
    
})
