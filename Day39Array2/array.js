const arr = [10,20,30,40,"Superman", "Spidarman", 30.45,"Marvel"];
// console.log(arr)
// // push => insert new element in the edning of array 
// console.log("Before", arr)
// arr.push("Batman");
// console.log("After",arr);

// // pop => pop remove last element in the ending of array 
// console.log("Before", arr)
// arr.pop();
// console.log("After",arr);


// // unShift => add new element at the begeining of array 
// console.log("Before", arr)
// arr.unshift(2,3,"Harsh");
// console.log("After",arr);


// Shift => remove element from the begeining of array 
// console.log("Before = ", arr)
// // arr.shift();
// for(let i =0; i<arr.lenght; i++){
//     arr.shift();
// }
// console.log("After = ",arr);

// shift 
// console.log("Before", arr)
// while(arr.length !=0){
//     arr.shift()
// }
// console.log("After = ",arr);

// splice 
// console.log("Before", arr);
// arr.splice(2,2);
// console.log("After = ",arr);

// slice 
// console.log("Before", arr);
// console.log("Slice Array => ",arr.slice(5,8));
// console.log("After = ",arr);


const salary = [
    {emp:1,salary:100, name:'Superman'},
    {emp:2, salary:201, name:'Bill gates'},
    {emp:3, salary:305, name:'Elon Musk'},
    {emp:4, salary:250, name:'Mukesh Ambani'},
    {emp:5, salary:815, name:'Spidarman'},
    {emp:6, salary:600, name:'Batman'},
    {emp:7, salary:723, name:'Iron'},
    {emp:8, salary:750, name:'Thor'},
    {emp:9, salary:9089, name:'Captain'},
];
// let result = salary.slice(3,9)
// console.log(result);
// let salarySum = 0;
// for(let element of result) 
// salarySum += element.salary;
// console.log(salarySum);

let evenSalary = [];
for(let element of salary){
    if(element.salary % 2 == 0){
        let result = evenSalary.push(element)
        console.log(result);
    }
}
console.log("Even Salary Array ->",evenSalary);

let sum = [];
for(let empSal of salary){
    
}