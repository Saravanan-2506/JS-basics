/*
//1
rain = false; 

if (rain){
    console.log("Take an umbrella");
}
else{
    console.log("Enjoy the sun");
}
*/

function Triangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilateral Triangle";
        } else if (a === b || b === c || a === c) {
            return "Isosceles Triangle";
        } else {
            return "Scalene Triangle";
        }
    } else {
        return "Not a valid triangle";
    }
}

console.log(Triangle(5, 5, 5)); 
console.log(Triangle(5, 5, 3)); 
console.log(Triangle(5, 6, 7));
console.log(Triangle(1, 2, 3)); 
