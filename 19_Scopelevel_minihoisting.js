function one(){
    const username="hitesh";

    function two(){
        const website="youtube"
       // console.log(username);
    }
    // console.log(website);

    two();
}
one();
//function inside function is like taking icecream . older people cant take icecream from child but child can

// ++++++Interesting+++++
 console.log(addone(8)); 
function addone(value){
    return value+1;

}

addTwo(8); // cant access function while declaring like variable
const addTwo=function(num){
    return num+2;
}