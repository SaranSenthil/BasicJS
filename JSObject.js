//Object
let book={
    Title: "Coding Hacks",
    Author: "John de",
    PublishedOn:28,
    Isavailable:true
}

console.log(book);
//JSON-Javascript object notation lightweight  data interchange format to exchabge data between server and front end web app.
//Object/ array Convert into JSON using JSon library
//Convert JS value to JSON String 
console.log(JSON.stringify(book));

//Convert JSON string into Objects
let person= '{"Title":"Coding Hacks", "Author":"John de", "PublishedOn":28,"Isavailable":true}' ;
console.log(JSON.parse(person));

//Front end web application request sent to API server , Server response as JSON string.
//we have to convert object and array depend on the need. 

//XML Http Request
//Import library first - in terminal type - npm install xhr2

const XMLHttpRequest=require('xhr2');
console.log('test')
//XMLHttprequest is  class to provide methods
//create an object to XMLhttp req class
let xhr = new XMLHttpRequest();
 xhr.open('GET', "https://restcountries.com/v3.1/all");
 xhr.onload = function(){
console.log(xhr.responseText)
let data = JSON.parse(xhr.responseText);
for(let i=0; i<data.length;i++)
{
    console.log(data[i].flags);
}
 };
 xhr.send();
//Api req url - type browser and enter

//steps for API call - data mani[pulation]
//1.import xml library
//2..Object creataion
//3.connection open
//4.load and send 

//Hoisting  Variable and function hoisting and scope
//declaration: telling the compiler the varible is here
// let x; //declared not defined
// console.log(x);
// x=10;//defined
// console.log(x);

//Another type of declaration
// console.log(x);
// let x; //Throw error as ReferenceError: Cannot access 'x' before initialization

//Hoisting declaration - variable and fun declaration are moved to the top of the scope.
//Uses-we can use variable and function before they declared.
x=5;
console.log(x);
var x=10;
console.log(x);

//Var - not recommended , reason: 1.unexpected behaviour, 
// arrow Function declaration - example for non hoisting throw error
// sayhello();

// let sayhello=( )=>{
// console.log('hello');
// }

//function hoisting
sayhello1();
 function sayhello1()
 {
    console.log('hello');
 }

 //Scope  refers to the visibility and accessbility of function and objects
  //global scope

  let word="apple";//global scope
   function m1(){
let word="as" // Local scope
console.log(word);
   }
   m1();
   console.log(word);