let employee = [
    { Emp_name: "Ramesh", Salary: 120000 },
    { Emp_name: "Suresh", Salary: 100000 },
    { Emp_name: "Mahesh", Salary: 160000 },
    { Emp_name: "Harsh", Salary: 120000 },
    { Emp_name: "Ramacharan", Salary: 90000 },
    { Emp_name: "Narayan", Salary: 150000 },
    { Emp_name: "Aayush", Salary: 100000 },
    { Emp_name: "Ramdas", Salary: 120000 },
    { Emp_name: "Akbar", Salary: 70000 },
];

let y = [];
let salarySum = 0;
for (let i = 0; i < employee.length; i++) {
    if (employee[i].Salary >= 120000) {
        y.push(employee[i]);
    }
}
console.log(y);

for(sum of y){
   salarySum += sum.Salary;
}
console.log(salarySum);