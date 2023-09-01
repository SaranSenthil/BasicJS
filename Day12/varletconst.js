//Var let const
//Declaration
var num=25;
let n1=10;
const n2=10; //can not be redeclared and reassigned but block scoped
//Redeclared - var support , let not support
var num=10;
//let n1=3;not allowed block scope variable
//Reassigned
num=15;
n1=100;

//block scoping
const n3=12;
function bs(){
    const n3=10;
    console.log(n3);
}
bs();
console.log(n3);

//function -block scoped var

function v1(){
    if(true)
    {
        var x=20;
    }
console.log(x);}
v1();

//function -block scoped let

function v2(){
    if(true)
    {
        let x1=20;
    }
console.log(x1);}
v2();

//Const arrays cant be reassigned with values or arrays
//const array values can be reassigned

const numbers=[1,2,3,4]
numbers[0]=10
numbers[1]=9
//numbers =[4, 5, 6]//not possible