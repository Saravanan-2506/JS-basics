/*
//Hello world 
function greet(){
    console.log("Hello, world !");
}

greet();

//Add two numbers
function add (a,b){
    let sum = `The sum of the numbers are ${a+b}`;
    return sum;
}

let v1 = add(10,20);
console.log(v1);

//Multiply a number by 5
function multiplyByFive(a){
    return `The result is ${a*5}`;
}

let v2 = multiplyByFive(4);
console.log(v2);
*/

//Even or Odd
function EvenOrOdd(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        return `Not a valid number`;
    }

    if (num % 2 === 0) {
        return `The number is even`;
    } else {
        return `The number is odd`;
    }
}

let v3 = EvenOrOdd(20);
let v4 = EvenOrOdd(15);
let v5 = EvenOrOdd("js");
console.log(v3);
console.log(v4);
console.log(v5);

