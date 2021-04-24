//const obj  = "salem";
const obj  = 55.5;
const type1 = obj =>{
    if (typeof obj =='number') 
        return Math.pow(obj,3);
    else if (typeof obj == 'string') 
        return obj;
    else obj;
}
const log = type1(obj);
console.log(log);