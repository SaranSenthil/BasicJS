// Object  In JS Array is also object and have object as data type.
// create Object using key value pair
let person={ 
    name: "sk",
    age: 25,
    city: "TMM"
}
//Accessing object using dot and bracket notation  objectname.properties/keys
// console.log(person.name);
// console.log(person["name"]);

// //In object key is the Index - Ex- name, age,city
// //To get the index of the object use below method: object.keys and for values object.values

// //To get keys and values using iterate method
// for(let key of Object.keys(person))
// {
//     console.log(key, person[key]);
// }
// //To get index or keys
// for(let ki in person)
// {
//     console.log(ki);
// }
// //To get values
// for(let value of Object.values(person))
// {
//     console.log(value);
// }

// //To change the value in the object ( Its mutable means changable)

// person.name = "God";
// console.log(person.name);

// // 1D Array
// let OneDarray=[1,2,3];
// console.log(OneDarray[0]);
// //2D Array - Array of 1D arrays
// let TwoDArray=[[1,2],[2,3],[6,7]];

// //3D Array - Array of 2D arrays
// let ThreeDArray=[
//     [[1,2],[2,3],[6,7]],
// [[8,2],[9,3],[61,7]],
// [[1,2],[20,3],[60,7]]
// ];
// console.log(TwoDArray[0]);
// console.log(TwoDArray[0][1]);
// console.log(ThreeDArray[0]);
// console.log(ThreeDArray[0][1]);
// console.log(ThreeDArray[0][1][1]);


//To convert object into array using entries method

//    let darray= Object.entries(person);
//     console.log(darray[1]);
//     console.log(darray[0]);
//     console.log(darray[2]);

//Sorting

let num= [1,2,3,4,5];

//print the array element in AS and DS order using array sort method
//Asecnding order
num.sort((a,b)=>(a-b));
console.log(num);

//Descending order
num.sort((a,b)=>(b-a));
console.log(num);

//List of words - Ascending Order (Dictionary)and Descending order

let words =["Cat", "Apple","Absolute","Elephant","Zebra","Rabbit"];
//It does not work for strings and display output not in right format. 
words.sort((a,b)=>a-b);
 console.log(words)

 //To sort the strings use below fun method (because we can not subtract string)

words.sort((a,b)=>{
//compare
//Ascending Order
if(a<b) 
{
    return -1;
}
else if(a>b)
{ return 1;
}
else{
    return 0;
}
// //Decending Order
// if(a<b) 
// {
//     return 1;
// }
// else if(a>b)
// { return -1;
// }
// else{
//     return 0;
// }
 });
 console.log(words)

 //Callback function: A function if passed as an argument to the another function. so that the another function call the callback function later.