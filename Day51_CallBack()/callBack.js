// let udhariPaisa = (ram, shayam) =>{
//     return ram + shayam;  //function body
// }
// let res = udhariPaisa(100,200); 
// // console.log(res);


// const chaiBusiness = (merapaisa, udhariPaisa) =>{
//     const chai = merapaisa + udhariPaisa; //udhariPaisa CallBack function hoga
//     return chai
// }
// const res2= chaiBusiness(300, res);
// console.log(res2);


// const print = (content,callback) =>{
//     console.log(content)
//     callback();
// }

// // const print2 = () =>{
// //     console.log("Spidarman is belog from Marvel");
// // } 

// const sbiROI = () => 7.9
// print("Superman is belog from DC",sbiROI)


const marksClc = (callback) =>{
    const result = callback();
    console.log("This is result array", result);

    let totalMarks = 0;
    let count = 0;
    for(let key in result){

    totalMarks += result[key]
    count ++;
    }
    return totalMarks/count;

}
const subjects = () =>{
    const arr = {
        cpp:50,
        java:60,
        php:70,
        js:95,
        react:100,
    };
    return arr;
}

console.log(marksClc(subjects))