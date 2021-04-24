const checkKey = true;
const inputKey = 454; // or input from user using browser prompt("Please insert key")
const keyOfSys = 454; 
const nameUser = "MOHAMMAD";
function key(check) {
    if (checkKey == check && inputKey == keyOfSys) {
        return true;
    } else {
        return false;
    }
}
function person(check) {
    if (check.toUpperCase() === nameUser) {
        return true;
    } else {
        return false;
    }
}
function security(keyVar , nameVar ) {
    if (keyVar && nameVar) {
        return "Welcome";
    } else {
        return "You can't access";
    }
}
const result = security(key(true), person('Mohammad'));
//console.log(result);
alert(result);
