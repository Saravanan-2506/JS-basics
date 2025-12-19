// Write a function formatName(firstName, lastName) that:
// returns "firstName lastName" if both are provided
// returns only firstName if lastName is missing

function formatName(firstName, lastName) {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
}

let name1 = formatName("R", "Saravanan");
console.log(name1);
let name2 = formatName("Nidharshanaa");
console.log(name2);
let name3 = formatName("Praveen", "Kumar");
console.log(name3);
