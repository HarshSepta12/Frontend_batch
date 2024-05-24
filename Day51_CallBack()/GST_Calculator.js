const mySalary = (inHand, callBack)=>{
    let result = (inHand - callBack)/100;
    console.log(result)
}
const diduction = () =>{
    const totaldid = {
        GST:5,
        iPhoneLoan:5,
        HomeLoan:8,
    };
    return totaldid;
}

mySalary(120000, diduction);

