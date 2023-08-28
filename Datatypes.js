//Datatype  
//What type of data store in a variable  defines datatyoe
//Variable= a label which points memory location
//Datatype number,string,boolean,undefined
let num=1;
let str='name';
let bool=true;
let n=null;
 console.log(num,str,bool,n);
  // to check the type of datatype
  console.log(typeof(n));

  //datatype object

  let obj =[1,2,3,4,'oliva'];
  console.log(typeof(obj));
  let obj1={

  }
  console.log(typeof(obj1))

  //Fuction type
  function sy()
  {
    console.log('hello')
  }

  console.log(typeof(sy))


//   //Types:
//   1.number
//   2.string
//   3.object
//   4.function
//   5.null

//Copy by value and copy by reference
//This is example of copy by value ; x and y created seperate memory, value wil be replaced
 let x=5;
 let y=x;
 x=10;
 console.log(x,y)

 //Copy by reference:
  let array1=[1,2,3,4];
  let array2=array1; // copy by ref - array2 does not create seperate memory
  array1.push(7);
  console.log(array1,array2)
 //Object -copy by reference
 let person1={
    name:'k',
    age:8
 }
let person2=person1;
person1.age=5
console.log(person1,person2)
//   //Note: strings and variables copy by value
//   arrays and Objects copy by ReferenceE

//Possible to convert array into copy by value
let array11=[1,2,3,4];
  let array12=[...array11]; // copy by value
  array11.push(7);
  array12.push(5)
  console.log(array11,array12)

  //Windows object  - Javascript browser  window property.

  //Execute the code in browser
  //open inspect and under console type window