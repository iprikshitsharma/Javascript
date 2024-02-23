//IIFE
//Immediately involked function expressions
// Reason => gloabl scope se pollution so hum alag scope bnate +immediately execute ho

function chai(){
    console.log('DB CONNECTED');
}
// ()() iife
(function chai(){
    console.log('DB CONNECTED');
})();

(function chaiaurcode(){
  console.log('DB Connected');
})();

((name)=>{
console.log(`DB IS CONNECTED TO ${name}`);
})('hitesh')

// two iifes ke liye  colon ; use karna hota hai