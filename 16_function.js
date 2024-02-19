// writing code in package 
// no repition
function sayMyName(){
    console.log("prikshit");
}
sayMyName();

function addTwoNumbers(number1,number2) // parameter
{
   console.log(number1+number2);
}
const results =addTwoNumbers(1,9); // arguments calling


function loginUserMessage(username){
    if(!username){ // undefined ko false maan lete hai
        console.log("please enter an username");
    }
    return `${username} just logged in `
}
const user =loginUserMessage("prikshit");
console.log(user);