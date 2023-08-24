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
    //1Q. You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenhei
    //Formula : Fahrenheit (°F) = (Celsius  * 9/5) + 32.
    // let celcius = parseInt(userInput);
    // let fahrenHeit = (celcius * 9/5) + 32;
    // //Round off value
    // console.log(fahrenHeit.toFixed(2));

 //2Q.program to find the factorial of a number

// take input from the user
/*const number = parseInt(userInput);

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}*/

//3Q.You are given with a number "N", find its cube.
// take input from the user
/*const number = parseInt(userInput);
let CubeNumber= number ** 3;
console.log(`Cube of the ${number} is ${CubeNumber}`);*/

//4Q.You are given Two Numbers, A and B. If C = A + B. Find C and Round Off.

/*const A = parseInt(userInput[0]);
const B = parseInt(userInput[1]);
let C = Math.round(A+B);
console.log(`Sum of the ${A} & ${B} is ${C}`);*/

//5Q. You are provided with a number check whether its odd or even. 
/*const number = parseInt(userInput);
// checking if number is Even/Odd
if ((number % 2) == 0) {
    console.log(`The given ${number} is Even.`);
}
else  {
    console.log(`The given ${number} is Odd.`);
}*/

//6Q. You are given three numbers A, B & C. Print the largest amongst these three numbers.
/*const A = parseInt(userInput[0]);
const B = parseInt(userInput[1]);
const C = parseInt(userInput[2]);
//Check the largest Number
if(A>B && A>C)
{
    console.log(`The Largest Number is ${A}`);
}
else if(B>A && B>C)
{
    console.log(`The Largest Number is ${B}`);
}
else{
    console.log(`The Largest Number is ${C}`);
}*/

//7Q.You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

/*let input = userInput[0].split(' ');
    let principleAmt = parseInt(input[0]);
    let interestRate = parseFloat(input[1]);
    let timeYears = parseFloat(input[2]);    
    console.log((principleAmt * timeYears * interestRate/100).toFixed(2));*/

//8Q. table print
/*let number = parseInt(userInput[0])
    if(number == 0){
        console.log('NULL');}
        else {
            let result = [];
            for(let i=1; i<=number; i++){
                result=9*i;
                result.push(result) 
            }
            console.log (result.join(' '));
        }*/
//9Q.Write a code to get an integer N and print the even values from 1 till N in a separate line.
/*let number = parseInt(userInput[0]);
for(i=2;i<=number;i+=2)
{
    console.log(i);
} */

//10Q.print all number from 1 to N
/*let number1 = parseInt(userInput[0]);
for(i=1;i<=number1;i++)
{
    console.log(i);
}
*/
//11Q.HCF
const number1=parseInt(userInput[0])
const number2=parseInt(userInput[1])
let hcf=[];
// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
         hcf = i;
    }
}
// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

//12Q.Write a code get an integer number as input and print the sum of the digits.
/*let number=userInput[0].split('');
let total=0;
for(let i=0;i<number.length;i++)
{
    total+=(parseInt(number[i]));
}
console.log(total);*/

/*13Q print odd even seperately., given number:1234 op: 1 3
                                                        2 4*/
/*var a=userInput[0].split("");
var even=[];
var odd=[];
for(i=0;i<a.length;i++){
    if(parseInt(a[i])%2==0)
      even.push(a[i]);
  else
  odd.push(a[i]);
  
}
even.sort();
odd.sort();
console.log(even.join(" "));
console.log(odd.join(" "));*/

//14Q: Write a code to get an integer N and print the digits of the integer.

/*for(let i=0;i<userInput.length;i++)
{
    var n=userInput[i].split("");
  console.log(n.join(" "))
}*/
//15Q.Write a program to get a string as input and reverse the string without using temporary variable.
/*let a= userInput[0].split('');
a=a.reverse();
console.log(a.join(' '));*/

//16Q. Let "A"  be a string. Remove all the whitespaces and find it's length.
// let a = userInput[0];
// let count=0;
// for(let i=0; i<a.length;i++)
// {
//     if(a[i]!= " ")
//     count++;
// }
// console.log(count);
//end-here
});