/*
var price = 1000;
var product = "Book";
var tax = 50;
console.log(product);
var total = price+tax;
console.log (total);

var fruitname = "Apple";
var count = 10; 
var fruitPrice = 15;
var totalPrice = count * fruitPrice; 
console.log(fruitname);
console.log(totalPrice);

//Write a program to swap two numbers using a temporary variable.
let a ,b;
a = prompt("Enter first number:");
b = prompt("Enter second number:");
console.log(`Values before swapping: ${a},${b}\n`);
let temp = a;
a=b;
b=temp;
console.log(`Values after swapping: ${a},${b}`);
*/
//Use a while loop to reverse a number.
function reverseNumber(num){
    let reversed = 0;
    while(num!=0){
        let digit = num %10;
        reversed = (reversed*10)+digit;
        num=Math.floor(num/10);
    }
    return reversed;
}
let a = prompt("Enter a number:");
console.log(`Entered number:${a}\n`);
console.log(`Reversed number:${reverseNumber(a)}`);