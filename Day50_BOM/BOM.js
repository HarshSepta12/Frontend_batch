const h1 = document.querySelector('h1');
const InnerWidth = window.innerWidth

h1.innerText = window.innerWidth

document.querySelector('#dark').addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'

    if(confirm("Your are redirected to google.com \n Ok to proceed"))
    location.assign('https://www.google.com');
});

document.querySelector('#light').addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'

    if(confirm("Your are redirected to amazon.in \n Ok to proceed"))
    location.assign('https://www.amazon.in/');
   

})