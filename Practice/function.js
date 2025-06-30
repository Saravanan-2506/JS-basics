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

//find maxof3
function findMax(a, b, c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        console.log("Invalid input");
        return;
    } 
    else {
        let largest = a > b ? (a > c ? a : c) : (b > c ? b : c);
        return largest;
    }
}

let a = findMax(2, 4, 1);
console.log(a); 


function iphone(){
    console.log("This is IPhone");
}
function redmi(){
    console.log("Redmi");
}
function oppo(){
    console.log("Oppo");
}
iphone()
redmi()
oppo()


factor = "Tom cruise"
fmovie = "Avengers"
fplayer = "Dhoni"

function favourite(actor,movie,player){
    let fav = `Favourite actor : ${actor} \nFavourite movie : ${movie} \nFavourite player : ${player} `;
    return fav;
}

let fav1 = favourite(factor,fmovie,fplayer);
console.log (fav1);

function area(Length,breadth){
    let areaOfRectangle = Length*breadth;
    return areaOfRectangle;
}

let a1=area(15,20);
console.log(a1);

//Function inside another function
function outer(){
    function inner(){
        return "Hello";
    }
    return inner();
}

console.log(outer());

//Mini calculator with function inside function;
function calculator(num1, num2, operation) {
    function add() {
        return num1 + num2;
    }
    function sub() {
        return num1 - num2;
    }
    function mul() {
        return num1 * num2;
    }
    function div() {
        if (num2 === 0) {
            return "Cannot divide by zero";
        } else {
            return num1 / num2;
        }
    }
    function mod() {
        return num1 % num2;
    }

    if (operation === 1) {
        return add();
    } else if (operation === 2) {
        return sub();
    } else if (operation === 3) {
        return mul();
    } else if (operation === 4) {
        return div();
    } else if (operation === 5) {
        return mod();
    } else {
        return "Invalid operation";
    }
}

while (true) {
    console.log("Menu\n1. Calculator\n2. Exit\n");
    let choice = parseInt(prompt("Enter your choice:"));

    switch (choice) {
        case 1: {
            let num1 = parseFloat(prompt("Enter number 1:"));
            let num2 = parseFloat(prompt("Enter number 2:"));
            console.log("Operations:\n1. Add\n2. Sub\n3. Mul\n4. Div\n5. Mod");
            let op_choice = parseInt(prompt("Enter your operation choice:"));
            let result = calculator(num1, num2, op_choice);
            console.log(`Result: ${result}`);
            break;
        }
        case 2: {
            console.log("Exiting program");
            break;
        }
        default: {
            console.log("Invalid input");
            break;
        }
    }

    if (choice === 2) {
        break;
    }
}



//course practice
const calcAverage = (a,b,c) => (a+b+c)/3 ;
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
function checkWinner(avgDolphins,avgKoalas){
    if (avgDolphins>=2*avgKoalas){
        console.log("Dolphins win");
    }
    else if (avgKoalas>= 2*avgDolphins){
        console.log("Koalas win");
    }
    else{
        console.log("No team wins...");
    }
}
checkWinner(scoreDolphins,scoreKoalas);

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
checkWinner(scoreDolphins,scoreKoalas);
*/