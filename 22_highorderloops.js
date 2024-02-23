//High Order loop
// for-of loop
// works not only on object but also on arr, strings
const arr=[1,2,3,4,5];
for (const i of arr) {
    console.log(i);
}

//Maps -> unique values
const map=new Map();
map.set('IN','INDIA')
map.set('USA','USA');
map.set('FR','FRANCE');
console.log(map);

for (const 
    [key,value] of map) {
        console.log(key,':-',value);
    
}
// iterate object - we cant iterate thru object
// const myobj={
//     'Game1':'NFS',
//     'Game2' :'RDR2',

// }

const myObject ={
    js:'javascript',
    cpp:'c++',
    'rb':'ruby',
    'swift': 'swift by apple'
}
//2 for in loop 
// for iterating in object prefer in-loop
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming =["js",'python','c++'];
for(const key in programming){
    console.log(`${key} and ${programming[key]}`);
}

// forEach loop
const coding =['js','py','c++','c']
// coding.forEach( function (item){
//        console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
coding.forEach((item,index,arr)=>{
 console.log(item,index,arr);
})

// Objects in Array
const prog=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
prog.forEach((item)=>{
console.log(item.languageName);
})


