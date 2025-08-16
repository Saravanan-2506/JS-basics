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
*/

//Variables 

/*
let myName = "Saravanan", Role = "Web Dev" ;

let my_Name = "R Saravanan",
ECA = "NCC";

console.log( `${myName}\n${Role}\n${my_Name}\n${ECA}` ); //Template strings 
*/

/*
let num=10;
let num; 
console.log(num)     //let rules
*/

/*
let num=10;
num = 30;
console.log(num)     //let rules
*/

/*
let age;
console.log(age);      // let rules 
*/

/*
var num1=20;
var num1;
console.log(num1);
var num1=30;
console.log(num1);  //var rules
*/

/*
const num2 = 400;
console.log(num2);
const num2;           //const rules
*/

/*
const birthYear =2006;
birthYear = 2007;          //const rules
*/

/*
const job;             //const rules
*/


//TDZ rules with variables 
/*
console.log(birthMonth);
const birthMonth = 05;   //const tdz rules 
*/

/*
console.log(num5);
var num5 = 300;         //var tdz rules
console.log(num5);
*/

/*
console.log(num6);
let num6=800;
console.log(num6);    //let tdz rules
*/

/*
console.log(num5);
var num5 = 300;         //var tdz rules
console.log(num5);
*/

//NaN - Not a Number
/*
let num8=NaN;
console.log(num8==NaN);
console.log(Number.isNaN(NaN));  
*/