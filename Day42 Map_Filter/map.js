const arr = [
    {id:1, name:"superman", email: 'superman@gmail.com',salary:12000},
    {id:2, name:"spidarman", email: 'spidarman@gmail.com',salary:10000},
    {id:3, name:"ironman", email: 'iron@gmail.com',salary:9000},
    {id:4, name:"thor", email: 'thor@gmail.com',salary:15000},
    {id:5, name:"hulk", email: 'hulk@gmail.com',salary:6000},
]
// map, filter 
// arr.map((data)=>console.log(data.salary+10000));
const result = arr.map((data)=>data.salary +10000)
console.log("This is coming from map", result);