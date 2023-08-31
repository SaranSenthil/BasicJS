//Function - is a block of statement which is executed whenever we call it.
//its reusability.

let a=6;
let b=7;
findmin(a,b);
function findmin(a,b){
    if(a<b)
    {
        console.log("true");
    }
    else{
        console.log("false");
    }
}
 a=10;
 b=18;
findmin(a,b);

//Function definition with out argument
function hello(){
    console.log("Hello")
}
//function call
hello();
hello();
hello();

//
//Function definition with argument
function helloarg(name){
    console.log(name)
}
//function call
helloarg('Gayu');
helloarg('Goda');
helloarg('Hiran');

//Return function
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function exponent(a,b){
    return a**b;
    //return(Math.pow(a,b));
}

console.log(add(6,7));
let sum = add(9,80);
let product= multiply(8,90);
let expo = exponent(5,2);
console.log('Sum is',sum, '\n','Product is',product,'\n','Exponent is',expo);

//Arrow function
let findmax1=(a,b) =>{
    return a>b ?a : b;
}

console.log(findmax1(555,111))

//IIEF - Immediately invoked function
console.log(((a,b) => {
    return a>b ?a : b;
}) (450,90));

((a,b) => {
    console.log( a>b ?a : b);
})(45,900);

//Array Function example
function findeven(array1){
    let evennum=[];
    for(let n of array1){
        if(n%2==0)
        {
            evennum.push(n);
            //console.log(n);
        }
    }
    return evennum;
}
let array1=[1,34,56,78,9,23,44,66,89]
console.log(findeven(array1));
