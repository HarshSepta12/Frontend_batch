// console.log(hero);

// var hero = "superman"

// function test(){
//     var hero = "Superman";
//     console.log('hero');
// }
// test()
// console.log(hero);

const course = {
    "Java": 500,
    "CPP": 600,
    "PHP": 700
}
let sum  = 0;

for(let key in course){
    console.log(key, course[key])
    sum += course[key]
}
console.log(sum)