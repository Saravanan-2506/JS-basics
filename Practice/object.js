/*
//Course practice1
const obj = {
    firstName:"Saravanan",
    noOfFriends : "3",
    bestFriend:"Chatgpt"
}
let sentence = `${obj.firstName} has ${obj.noOfFriends}, and his bestfriend is called ${obj.bestFriend}`;
console.log(sentence);

//Course practice2
const obj = {
    Name : "Saravanan",
    birthYear : "2006",
    profession : "Undergraduate student",
    hasDriverLicence : false,

    calcAge : function(){
        this.age  = 2025 - this.birthYear;
        return this.age;
    },
    // driverLicence: function(){
    //     if (this.hasDriverLicence){
    //         return "has a driver's licence";
    //     }
    //     else {
    //         return "doesnot have a driver's licence";
    //     }
    // },
    getSummary : function(){
        return `${this.Name} is a ${this.calcAge()} year old, and he has ${this.hasDriverLicence ? "a":"no" } driver's licence`;
    }

};

var userInfo = obj.getSummary();
console.log(userInfo);
*/
//course practice3
const mark ={
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI:function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI:function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
if (mark.bmi>john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
else if(john.bmi>mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
else{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) and ${john.fullName}'s BMI (${john.bmi}) are equal`);
}

