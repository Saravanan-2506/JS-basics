// Write a function safeDivide(a, b) that:
// returns "Cannot divide by zero" if b is 0
// otherwise returns the division result

function safeDivide(a, b) {
  if (b === 0) {
    console.log("Cannot divide by zero");
    return;
  }
  console.log(a/b);
}

safeDivide(1,2);
safeDivide(4,0);
safeDivide(0,3);
