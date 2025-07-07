/*
//Course practice
function calcTip(billAmount){
    if(billAmount>49 && billAmount<301){
        return 0.15*billAmount;
    }
    else{
        return 0.20*billAmount;
    }
}

var bills = [125,555,44];
var tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

var totals = new Array(3);
for (let i=0;i<3;i++){
    totals[i]=bills[i]+tips[i];
}
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", totals);

//Sum of elements in array 
var arr = [10,20,30,40,50];
var sum = 0;
for (let i=0; i<arr.length;i++){
    sum += arr[i];
}
console.log(sum);

//Largest num in array
var arr1 = [30,74,38,92,25];
var largest = arr1[0];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>largest){
        largest = arr1[i];
    }
}
console.log(largest);

//reverse an array without reverse()
var arr2 = [1,2,3,4,5];
for (let i =0;i<(arr2.length/2);i++){
    [arr2[i],arr2[arr2.length-1-i]]=[arr2[arr2.length-1-i],arr2[i]];
}
console.log(arr2);

//Check given element is in an array
var arr3 = [10,20,30,40,50,60,70,80];
var key = parseInt(prompt("Enter an element to check presence in the array:"));
if(arr3.includes(key)){
    console.log(`The element ${key} is found in the array`);
} 
else {
    console.log(`The element ${key} is not found in the array`);
}

*/
//course practice
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips=[];
let totals=[];
for(let i =0;i<10;i++){
    tips[i]=calcTip(bills[i]);
    totals[i]=bills[i]+tips[i];
}

function calcAverage(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/(arr.length);
}
const avg = calcAverage(totals);
console.log(avg);