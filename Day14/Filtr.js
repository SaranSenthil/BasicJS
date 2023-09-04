//Filter - Caal back function and return the element which met the condition

let num=[1,2,3,4,5,6,79,8,7,6];

let result=num.filter((value,index,array) =>{
// if(value%2==0)
// {
//     return true;
// }
// else {
//     return false;
// }
return (value%2==0);
});

console.log(result);

//problem to find person who older than 35 using filter and map method
let person=[
   ['Alice',20],
   ['Alice1',25],
   ['Alice2',30],
   ['Alice3',35],
   ['Alice4',40],
   ['Alice5',60]
];

// let re = person.filter((item)=>item[1]>=35); //it print both name and age
// console.log(re);
//to print name alone

let rename = person.filter((persons)=>persons[1]>=35).map(persons=>persons[0]);
console.log(rename);

//problem to find person who older than 35 without using map and filter
let filpersons=[];
// for( let persons of person){
//     if(persons[1]>=35)
//     filpersons.push(persons[0]);
// }
// console.log(filpersons);
person.forEach((persons)=>{
    if(persons[1]>=35)
    filpersons.push(persons[0]);
});
console.log(filpersons);