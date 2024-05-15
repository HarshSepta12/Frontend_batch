const element = document.querySelector('h1');

console.log("ClassName = ", element.className);
console.log("Id = ", element.id);
// element.className = 'red';


// set timeout method 
// setTimeout(()=>{
//     element.className = 'yellow'
//     console.log("inside timeout")
// },2000);
// setTimeout(()=>{
//     element.className = 'blue'
//     console.log("inside timeout")
// },3000);


// setinterval method 
// setInterval(() =>{
//     element.className = 'yellow'
//         console.log("inside timeout")
//     },2000);
// setInterval(() =>{
//     element.className = 'blue'
//         console.log("inside timeout")
//     },3000);

// element.style.backgroundColor = 'blue';
// element.style.fontSize = '6rem'
// element.style.color = 'black'
const body = document.querySelector('body');

body.style.backgroundImage = 'blue';

setInterval(() =>{
    // body.style.background = 'blue';
    body.style.height = '100vh'
    body.style.backgroundImage = 'linear-gradient(to top, #30cfd0 0%, #330867 100%)';
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundSize = 'cover'
    body.style.backgroundPosition = 'center'
},1000)
setInterval(() =>{
    
    body.style.backgroundImage =  'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)';
    
},2000)
setInterval(() =>{
    body.style.backgroundImage = 'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)';
    
},3000)
setInterval(() =>{
    body.style.background = 'aqua';
},4000)
setInterval(() =>{
    body.style.background = 'pink';
},5000)