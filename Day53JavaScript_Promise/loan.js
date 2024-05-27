let ramAlereadyMoney = 200;
let loanAmout = 50;
let harsh = 100;
const loan = new Promise((resolve,reject)=>{
    let remainingAmout = harsh - loanAmout;
    if(remainingAmout >0){
       let obj = resolve({message: 'Bhai fir lage toh bolna', loanAmout});
        resolve(obj)
    }else{
        reject({message: 'Bhai nhi de paunga'})
    }
})
loan
.then((res)=>{
    console.log(res.message)
    return res.loanAmout + ramAlereadyMoney})
.then((res)=>console.log(`I started my own startup with harsh help now i have ${res} money`))
.catch((err)=>console.log(err));