// Map is the array method  

let numbers=[1,2,3,4,5];

//length property - prints the number of elements
 console.log(numbers.length);

 //push method - Appends new element and returns the new element of array
let numtobepush = [6,7,8,9]
 console.log(numbers.push(8)); //For single element push
 console.log(numbers);
 //in-place method - means orginal array changed
 numbers.push(...numtobepush) //to push the multiple element
console.log(numbers);

/*Map method - it will crerate an array of same size
It will apply a function of each element in the array
and stores those value an array and returns it*/
 //Map method - array tansformation, non in place methos - original array not changed until we store it into it
let newnum=[1,2,3,4,5]
 let squarie=(value,index,array)=>{
//console.log(value,index,array);
return(value*value)
 };

newnum=newnum.map(squarie);
console.log(newnum);

//Reduce the above code like this
let newnum1=[2,4,6,8]
 newnum1 = newnum1.map((value,index,array) => value**2);
 console.log(newnum1);


