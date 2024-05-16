const body = document.querySelector('body');
const img = document.querySelector('img');
const originalImg = document.querySelector('img')

const changeBgColor = () =>{
    body.style.backgroundColor = 'gray';
    body.style.color = 'white';
}
const changelight = () =>{
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}

const ChangeImg = ()=>{
    img.src = 'https://cdn.pixabay.com/photo/2024/02/20/08/45/woman-8584961_1280.jpg'

}
const originalImage = ()=>{
    img.src = 'https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_1280.jpg'

}