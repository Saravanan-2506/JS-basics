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
