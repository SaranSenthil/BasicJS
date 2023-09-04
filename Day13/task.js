/*
Task1: 
Create a book class that has properties for  Title author, isb num
Implement a method displayinfo that displays information
create an object to the book with the book1.

Task2: 
create a calculato class that has methods add,sub,mul,div
Implement methods to perrform those operation on two numbers.
*/

class Book{
 constructor(...pass){
this.items=[...pass];
 }
 todisaplayInfo(){
return this.items;
 }
}

let book1= new Book('Make Money' , 'John Doe' , 1234);
console.log(book1.todisaplayInfo());

class calc{
    constructor(a,b){
        this.n1=a;
        this.n2=b;
    }
    toAdd(){
       return this.n1+this.n2;
    }
    tosub(){
        return this.n1-this.n2;
     }
     toMul(){
        return this.n1*this.n2;
     }
     toDiv(){
        return this.n1/this.n2;
     }
}
let num= new calc(12,2);
console.log(num.toAdd());
console.log(num.tosub());
console.log(num.toMul());
console.log(num.toDiv());

/* Task 3:
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/

/*
Task4:
https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
*/