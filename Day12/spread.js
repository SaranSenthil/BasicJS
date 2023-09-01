//Spread and rest operator -symbol ... > depend on place meaning change

let num =[23,23,45,67]
let num1=[24,56,67,89,90]
console.log(...num)//unpack the array and spreading
//let copynum= [...num];//copy by value
let copynum= [num];//copy by reference
let num3=[...num1,...num,2,34,56]
copynum.push(5)
num.push(4)
console.log(copynum, num, '\n' , ...num3);

//rest of the argument  rest operator  used to fun parameters.
function fnmax(a,...b)
{
    console.log(a,b);
}
fnmax(5,6,7,8,9);
fnmax(5,6);