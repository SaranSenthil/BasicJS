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
