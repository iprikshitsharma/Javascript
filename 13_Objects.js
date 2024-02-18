//  2 types declare
// constructor and literal
// SingleTon => constrcutor
// object.create
// no singleton with litral

// +++++++Object Lietral+++++++++
const mySym=Symbol("key1");
const JsUser ={
    name : "prikshit",
    "full name":"prikshit sharma",
    age :20,
    location:"Himachal Pradesh",
    email :"prikshit@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]:"key1"
    


}
// How to Access
console.log(JsUser.email); // first name : "prikshit sharma"
console.log(JsUser["email"]);
console.log( typeof JsUser.mySym);

JsUser.email="prikshit@gpt.com";
console.log(JsUser["email"]);
// Object.freeze(JsUser); // now we cant do change in our object

JsUser.greeting =function(){
    console.log(`Hello js user , ${this.name}`);
}
console.log(JsUser.greeting());
// greeting 