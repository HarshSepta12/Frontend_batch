const h1 = document.createElement("p")


h1.setAttribute('class','black')
h1.setAttribute('id','h1')


h1.innerText = 'This is my own h1'

document.body.appendChild(h1)
console.log("Making my on tag", h1)

const image = document.createElement('img');


image.src = 'https://cdn.pixabay.com/photo/2023/02/08/18/36/tawny-owl-7777285_1280.jpg'
document.body.append(image)