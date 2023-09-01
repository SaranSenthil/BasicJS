//Object property shorthand
//Temp literals
//Arrow fun

//Obj without shorthand
// const author ="Krish"
// const title="Geetha sabatham"

// const book={
//     author:author,
//     title:title
// }
// console.log(book)

//Obj with shorthand
const author ="Krish"
const title="Geetha sabatham"

const book={
author,title
}
console.log(book)

//Operator shorthand
let a=10;
//a=a+10;
//by using shorthand
a+=10;
console.log(a);

//Temp literals  single /double single line sentence only allowed, backtick-multi line allowed and embed values using ${}.
let word='apple';
let word1=`apple
 is Fruit`
let word2="Apple is good for health"
console.log(word,word1,word2);
let message = `Fruit name is, ${word}`;
console.log(message)

//for , foreach and for of -- object convert into array
