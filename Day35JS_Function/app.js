// let a = 10;
// let b = 20;
// console.log(`Sum of ${a} and ${b} = ${a + b}`);
// a = 100;
// b = 20;
// console.log(`Sum of ${a} and ${b} = ${a + b}`);
// a = 40;
// b = 220;
// console.log(`Sum of ${a} and ${b} = ${a + b}`);
// a = 70;
// b = 90;
// console.log(`Sum of ${a} and ${b} = ${a + b}`);
// a = 20;
// b = 770;
// console.log(`Sum of ${a} and ${b} = ${a + b}`);

// function 
let userChoice = parseInt(prompt("Enter task: \nPress 1 for Add \n Press 2 for subtraction \n Press 3 for Multiplication \n Press 4 for Divide"));
let userinput1 = parseInt(prompt("Enter number"));
let userinput2 = parseInt(prompt("Enter number"));
switch(userChoice){
case 1:
function sum(a,b){
    console.log(`Sum of ${userinput1} and ${userinput2} = ${userinput1 + userinput2}`);
    alert((`Sum of ${userinput1} and ${userinput2} = ${userinput1 + userinput2}`))
}
sum(100,23);
break;

case 2:
function Subtraction(a,b){
    console.log(`Subtraction of ${userinput1} and ${userinput2} = ${userinput1 - userinput2}`);
    alert((`Subtraction of ${userinput1} and ${userinput2} = ${userinput1 - userinput2}`))
}
Subtraction(100,23);
break;

case 3:
function multiplication(a,b){
    console.log(`multiplication of ${userinput1} and ${userinput2} = ${userinput1 * userinput2}`);
    alert((`multiplication of ${userinput1} and ${userinput2} = ${userinput1 * userinput2}`))
}
multiplication(12,12);
break;

case 4:
function dividation(a,b){
    console.log(`dividation of ${userinput1} and ${userinput2} = ${userinput1 / userinput2}`);
    alert((`dividation of ${userinput1} and ${userinput2} = ${userinput1 / userinput2}`))
}
dividation(100,50);
break;
default:
    console.log("Wrong input");
}