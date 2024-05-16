const img = document.querySelector('img');
const text = document.querySelector('h1');

setInterval(() =>{
    img.src = 'https://cdn.pixabay.com/photo/2024/04/16/16/25/ai-generated-8700383_1280.jpg';
    text.innerText = 'Demo 2'
},2000);
setInterval(() =>{
    img.src = 'https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_1280.jpg';
    text.innerText = 'Demo 3'
   
},3000);
setInterval(() =>{
    img.src = 'https://cdn.pixabay.com/photo/2024/04/25/06/50/banana-8719086_1280.jpg';
    text.innerText = 'Demo 4'
},4000);
setInterval(() =>{
    img.src = 'https://cdn.pixabay.com/photo/2024/03/07/22/56/woman-8619512_1280.jpg';
    text.innerText = 'Demo 5'
},5000);