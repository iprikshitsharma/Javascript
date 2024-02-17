// 2 types memory 
//1 stack (primtive) copy milta hai
//2 heap (non primtive) original value milti hai
let myYoutubeName ="hiteshchoudhary"

let anotherName=myYoutubeName;
anotherName="prikshit";
console.log(anotherName); // prikshit
console.log(myYoutubeName); // hiteshchoudhary

let user1={
    email : "user@gmail.com"
}
let user2=user1
user2.email="prikshit@gmail.com";
console.log(user1.email);
