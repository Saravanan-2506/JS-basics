// Write a function formatName(firstName, lastName) that:
// returns "firstName lastName" if both are provided
// returns only firstName if lastName is missing


function formatName1(firstName, lastName) {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
}

let fullName = formatName1("R", "Saravanan");
console.log(fullName);
fullName = formatName1("Nidharshanaa");
console.log(fullName);
fullName = formatName1("Praveen", "Kumar");
console.log(fullName);


//A better way of approach
function formatName2(firstName,lastName=''){
    return lastName ? firstName+' '+lastName : firstName;
}

fullName = formatName2("R", "Saravanan");
console.log(fullName);
fullName = formatName2("Nidharshanaa");
console.log(fullName);
fullName = formatName2("Praveen", "Kumar");
console.log(fullName);
