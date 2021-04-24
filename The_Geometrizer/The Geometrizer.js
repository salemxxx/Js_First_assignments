const redius = 5;
//const radius = parseFloat(prompt("Please insert resius of a circle"));
const circumference = calcCircumfrence(redius);
const area = calcArea(redius);  
//Calculate circumference of a circle
function calcCircumfrence(redius){ 
    return 2*Math.PI*redius;
}
//Calculate area of a circle
function calcArea(redius){ 
    return Math.PI*Math.pow(redius,2);
}

console.log('The circumference is: ' + circumference);
console.log("The area is: " + area);
/*
document.write('The circumference is: ' + circumference);
document.write('<br>')
document.write("The area is: " + area);
*/      