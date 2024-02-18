const tinderUser = new Object(); // singelton
tinderUser.id="123";
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser ={
    email :"some@gmail.com",
    fullname:{
          userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
          }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e"}
const obj3= Object.assign({},obj1,obj2) 
// combine using spread method
const newobj={...obj1,...obj2}
console.log(newobj);

console.log(Object.keys(tinderUser));// gives an array of keys
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));// creates an array of key and value

console.log(tinderUser.hasOwnProperty("id")); // checks that proeprty exist in the object return boolean value