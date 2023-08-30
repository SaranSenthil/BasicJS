//array is an inbuilt structure
//that allows us to store more than one item(dissimilar - different datatypes )
//in a consective memory location
let num =[1,2,3,4]
//print whole array
console.log(num)

//for position access by use of index location - to access position value
console.log(num[0]);

//Arays are mutable -changable
num[1]=5;
console.log(num[1]);

//to find the number of element/size in array
console.log(num.length);

//iteration/traversal - one by one element visiting
let total=0;
for (let i=0; i<num.length;i++)
{
    console.log(num[i]);
    
    total+=num[i];

}
console.log(total);