function calculateCartPrice(val1,val2,...num1){
 return num1
}
// rest operator when we send multiple value thru function
console.log(calculateCartPrice(200,300,400,800));

const user={
    username:"prikshit",
    price:999
}
function handleObject(anyobject){
   console.log(`{Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

//+++++++++++Array++++++=
const array=[200,400,100,600];
function returnsecvale(getarray){
    return getarray[1];
}
console.log(returnsecvale(array));
