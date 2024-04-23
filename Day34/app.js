// const person1 = {

// name:"Spidarman",
// gmail:'superman@gmail.com',
// age:350,
// salary:120000,
// name:'Spidarman',
// PanCard: 'TAADE908C',
// pinCode:6789567
// };

// const person2 = {
//  ...person1,
// name: "Batman",
// gmail:'Batman@gmail.com',
// location:'Indore',
// mobile:778564854,
// Dateofjoining: '12/4/2000'
// };
// const{name, age,mobile} = person2;  //object Destructuring 

// console.log("This is person1 object",person1);
// console.log("This is person2 object",person2.location);
// console.log("This is person2 object","\n", age, "\n",name,"\n", mobile);

// const number1 = [10,20,30,40];
// const number2 = [...number1,50,60,70];
// console.log(number2);

let Car = {
    BrandName: 'Audi',
    wheel:4,
    headlights: 2,
    engineType:'Petrol'
}
let Audi = {
    ...Car,
    model:"2.0",
    BrandName: 'Audi',
    topSpeed:'400km/per',
    Showroom:'Mangal Shree Auto',
    launch: 2024
}
let BMW = {
    ...Car,
    BrandName:'BMW7.0',
    model:"7.0",
    topSpeed:'700km/per',
    Showroom:'Mangal Shree Auto Deal',
    launch: 2024
}
console.log('Specification of car',Car);
console.log('Specification of Audi',Audi);
console.log('Specification of BMW',BMW);
