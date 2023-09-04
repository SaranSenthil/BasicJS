/*
Reduce method - call back function,  return the single element
*/
// let numbers=[1,2,3,4];

// let res =numbers.reduce((prvvalue,crntvalue)=>{
// return prvvalue*crntvalue;
// }); //1+2 =3+3=6+4
// console.log(res);

//Reduce method with previous value
// let numbers=[1,2,3,4];

// let res =numbers.reduce((prvvalue,crntvalue)=>{
//     console.log(prvvalue,crntvalue)
// return prvvalue+crntvalue;
// },10); //1+2 =3+3=6+4
// console.log(res);

//Check the current value exists in array
let numbers=[1,2,3,4,5,6,6,7,8,9,1,2,3];

let res =numbers.reduce((prvvalue,crntvalue)=>{
    if(!prvvalue.includes(crntvalue)){
        return [...prvvalue,crntvalue]
    }
    return prvvalue;
},[]); //here previous value is empty array
console.log(res);

