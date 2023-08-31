//question 1
//How to compare two JSON have the same properties without order
//let obj1 = {name:"person1", age:5}
//ler obj2 = {age:5 , name:"person1"}

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

var assumption=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            assumption=false;
            break;
        }
    }
}
else {
    assumption=false;
}
console.log(assumption);

//question 2
//use the rest countries api url and display all the country flag in console

//1st step : create a XHR object
const XMLHttpRequest=require('xhr2');
let request= new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request.send();

//4th step:: once the data sucessfully received from server
//onload is an event
request.onload= function(){
    let data = JSON.parse(request.response);
    for(let i=0; i<data.length;i++)
    {
        console.log(data[i].flags)
    }
}

//question 3
//use rest countries api url and print all countries names,regions,subregion and populations
//1st step : create a XHR object

let request1= new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request1.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request1.send();

//4th step:: once the data sucessfully received from server
//onload is an event
request1.onload= function(){
    let data= JSON.parse(request1.response);
    console.log(data.name)
}
