const Persnal = [
  {id:1, name:'Harsh',category:'Nike', size:'xl',age:23},
  {id:2, name:'Divyaraj',category:'Puma', size:'xl',age:24},
  {id:3, name:'Ramcharan',category:'Peter England', size:'xl',age:20},
  {id:4, name:'Chitransh',category:'Allen Solley', size:'m',age:27},
  {id:5, name:'Narayan',category:'Zudio', size:'l',age:25},
  {id:6, name:'Shubham',category:'Allen Solley', size:'xl',age:15},
  {id:7, name:'Aayush',category:'Peter England', size:'l',age:27},
  {id:8, name:'Shree',category:'Puma', size:'xl',age:22},
  {id:9, name:'Nitin',category:'Nike', size:'xxl',age:19},
  {id:10, name:'Rishabh',category:'Zudio', size:'m',age:20},
]
// const result = Persnal.filter((data)=>data.category == 'Nike');
// console.log(result);

// const result1 = Persnal.filter((data)=>data.age >= 22);
// console.log(result1);

const result2 = Persnal.filter((data)=>data.size == 'xl').map((data)=>console.log(data))
