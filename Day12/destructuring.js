//Destructuring  - the values from array/object get into individual variable
//simple interest
// let values=[1000,2,10];
// let p = values[0];
// let n= values[1];
// let r= values[2];
//  let simpleint = (p*n*r)/100;

//array destructring
let [p,n,r]=[1000,2,10]
let simpleint = (p*n*r)/100;
let total=p+simpleint;
console.log(total);

let book={
    title:'Java',
    author:'Joe'
}
//object destructuring
let{ title:heading, author:writer}=book;
console.log(heading);
console.log(writer)
 
// function hw(values)
// {
//  weight= values[0];
//  height=values[1];
//  console.log(weight,height)
// }

// hw(60,168);

//function destructuring
function hw(weight,height)
{
 console.log(weight,height)
}

hw(60,168);