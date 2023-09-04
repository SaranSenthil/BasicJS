//Prototype: fundamental concepts. 
//1.It allows as to add method property to methods and property
//2.it allows us to enable inheritance

 //function prototupe
  function proto(name)
  {
 this.name = name;
 this.greet = function(){
    console.log(`Hello myname is ${this.name}`);
}
  }
//create instance or object
let name1 = new proto('John');
let name2=new proto('doe');
name1.greet();
console.log(name1,name2)

 //function prototupe
 function proto1(name,email)
 {
this.name = name;
this.email=email;
this.greet = function(){
    console.log(`Hello myname is ${this.name}`);
}
 }
 //seperate protype and add method for proto1

 proto1.prototype ={
    printemail(){
    console.log(`Email ${this.email}`)
}}
let student1=new proto1('Henry', 'abc@gmail.com'); 
let student2=new proto1('Peter', 'bn@gm.com');
student1.greet();
student1.printemail();


//class -Template/Blue print for creating oject constructor

class Array{
 constructor(...args)
 {
this.items=[...args]
 }
 toArray()
 {
  return this.items
 }

 push(...data)
 {
  this.items.push(...data)
 }
}

let num = new Array(1,2,3,4,5);

num.push(9);
num.push(8);
console.log(num.toArray());