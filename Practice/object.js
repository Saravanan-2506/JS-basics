/*
//Course practice1
const obj = {
    firstName:"Saravanan",
    noOfFriends : "3",
    bestFriend:"Chatgpt"
}
let sentence = `${obj.firstName} has ${obj.noOfFriends}, and his bestfriend is called ${obj.bestFriend}`;
console.log(sentence);
*/
//Course practice2
const obj = {
    Name : "Saravanan",
    birthYear : "2006",
    profession : "Undergraduate student",
    hasDriverLicence : false,

    calcAge : function(){
        this.age  = 2025 - this.birthYear;
        return ;
    },
    driverLicence: function(){
        if (this.hasDriverLicence){
            return "has a driver's licence";
        }
        else {
            return "doesnot have a driver's licence";
        }
    }

}
obj.calcAge();
var userInfo = `${obj.Name} is a ${obj.age} year old, and he ${obj.driverLicence()}`;
console.log(userInfo);
