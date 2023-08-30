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