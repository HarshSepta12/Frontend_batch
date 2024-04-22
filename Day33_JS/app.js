// let age = 18;
// (age>=19)?console.log("You can drive"):console.log("You can not drive");

let table = 2;
for(let i = 1; i<=10; i++){
    console.log(`${table}x${i} = ${table*i}`);
}

let n = 496440;
let digiSum = 0;
while(n>0){
    let temp = n % 10;
    digiSum += temp;
    n = Math.floor((n/10));
    console.log("Reminder = ", n);
}

