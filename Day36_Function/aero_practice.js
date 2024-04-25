// let ra = prompt("Enter radius");
// let he = prompt("Enter height");
// const CalcArea = (radius, height) =>{
//     console.log(2*3.14*(radius+height))
// }
// CalcArea(ra, he);

let pri = parseInt(prompt("Enter principal"));
let rate = parseInt(prompt("Enter rate"));
let time = parseInt(prompt("Enter time"));
let n = parseInt(prompt("Enter n"));
const Ci = (pri,rate, time, n,)=>{
    console.log(pri*(1+rate/n)*(n*time)-pri);
}
Ci(pri,rate, time, n,);

