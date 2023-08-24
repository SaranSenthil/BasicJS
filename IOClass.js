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
  //start-here
  //Your code goes here … replace the below line with your code logic 

  //1Q.get the input "guvi" and print the output like "g,u,v,i".
  //console.log(userInput[0].split('').join(','));
   
//2Q .get the input "2 3 4 5 6 7" and print the output like "2 3 4 5 6 7".
     //console.log(userInput[0].split('').join(''));

/*3Q . get the input " 5 3 
                       1 2 3 4 5" and print the output like "5 3 
                                                             1 2 3 4 5".*/

// for(let i=0;i<userInput.length;i++)
// {
//   console.log(userInput[i].split('').join(''));
// }          
               
/*4Q. get the input " 5 3 
                      1 2 3 4 5" and print the output like "5 3 1 2 3 4 5".*/
             
 //console.log(userInput[0],userInput[1]);
 

/*5Q. get the input " 2.3 3.5 4.6" and print the output like "2.3 
                                                              3.5 
                                                              4.6".*/
// let floats=userInput[0].split(' ');
// floats.forEach(value => {
//   console.log(value);
// });

/*6Q. get the input " guvi" and print the output like "g 
                                                      u 
                                                      v
                                                      i".*/
 let str1=userInput[0].split('');
  str1.forEach(value => {
  console.log(value);
 });
    //end-here
}); 