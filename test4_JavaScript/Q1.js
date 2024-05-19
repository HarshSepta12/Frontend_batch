let inr,dir
const getValue = () =>{
    inr = parseFloat(document.querySelector('#currency').value);
    dir = parseFloat(document.querySelector('#dir').value);
}
document.querySelector('#usd').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*0.12
})
document.querySelector('#yen').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*1.87
})
document.querySelector('#euro').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*0.11
})
document.querySelector('#dihram').addEventListener('click',()=>{
    document.querySelector('#result').innerText = 22.68/dir
})