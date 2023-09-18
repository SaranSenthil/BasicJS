// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    //Code Starts Here
    //Sort the array and print elements in increasing frequency order. 
    //1.input Handling 
    //To see whats in the Input
    console.log(userInput);
   //To check type of and convert into number
   let num = parseInt(userInput[0]);
   console.log(num,typeof(num));
    
   // to convert array to string
   console.log(userInput[1].split(' '));
   //To convert array of string to array of numbers (intergers)
   let numbers = userInput[1].split(' ')
     for (let index=0; index<num;index++)
   {
    numbers[index]=parseInt(numbers[index]);
   }
   console.log(numbers);

   //to check the occurance(frequency) of number / stirng in given Array
   //Follow below Steps
   //Step 1: Calculate the frequency of number
    //create empty object
    let frequency = {};
    //Step 2:Implement -  Hashing algorithm
    //Iterate array and create entry and initialize as Zero
    for (let index=0; index<num;index++)
    {
    frequency[numbers[index]]=0;
    }
    //Step 3:To find Occurance
    for (let index=0; index<num;index++)
    {
     frequency[numbers[index]]++;
    }
    console.log(frequency);
    //Object methods - used to print key and values
//for keys-- use objects.key
console.log(Object.keys(frequency));
//for values -- use objects.values
console.log(Object.values(frequency));
//Step 4:To print an array structure from object structure- use object.entries
let frequencies= Object.entries(frequency)
console.log(frequencies);
//Step 5:for 2dimensional array sorting use below method
frequencies.sort((a,b) => a[1]-b[1]);
console.log(frequencies);
//Step 6:to print the item use map method
console.log(frequencies.map(item=>item[0]).join(' '));
});