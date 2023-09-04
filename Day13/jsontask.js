//For the given Json iterate over using for, forin,for of, for each loop

//Example for converting object to string
/*
let person={
    Name:'Hemakshi',
    Year:1992,
    Age: 31,
    Place:'Tirumangalam',
    State:'TamilNadu'
}

let jsonstring = JSON.stringify(person);
console.log(jsonstring);*/

//Given Json
let jsstring='{"Name":"Hemakshi","Year":1992,"Age":31,"Place":"Tirumangalam","State":"TamilNadu"}'

//convert it into object to iterate
let obj= JSON.parse(jsstring);
console.log(obj);

//iterate using for loop
for(let index=0; index<(Object.keys(obj).length);index++){
console.log(Object.keys(obj)[index],":",Object.values(obj)[index]);
}
//iterate using forin loop
for(let index in (Object.keys(obj))){
    console.log(Object.keys(obj)[index],":",Object.values(obj)[index]);
    }

//Iterate forof loop - we need to convert it on array first

let jsarray= Object.entries(obj);
for(let entry of (Object.entries(obj)))
{
    console.log(entry[0],entry[1]);
}

//foreach loop
 Object.entries(obj).forEach((entry) => {
 console.log(entry[0],":", entry[1]);
 });