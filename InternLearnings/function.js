
//JS Callbacks
function display(some){
    console.log(`The name of user is ${some}`);
}

function userName(fname,lname,display){
    fullName = fname +' '+lname
    display(fullName);
}
 
userName ('R','Saravanan',display);
