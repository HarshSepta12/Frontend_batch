// let arr = [1,2,3,4,5,6,7,8];
// function part(){
//     for(let i = 0; i<=arr.length; i++){
//         if(i == 0 || i == 1){
//             continue;
//         }else if(i == 6){
//             break
//         }
//         console.log(arr[i])
//     }
// }
// part()

const arr = [10,40,20,30,40,30,50, "Superman", "Spidarman", "Thor", "Hulk"];
 
// Slice array without slice method calling 
// const mySlice = (start, end) =>{
//     const temp = [];
//     for(let i =start; i<=end; i++){
//         temp.push(arr[i]);
//     }
//     return temp;
// }
// console.log("Original Slice", arr.slice(5,7));
// console.log("Apna Slice", mySlice(5,6));

// concat 
// const bollywood = ["PK","3-Idoit", "Shaadi me jsroor aana", "12th Fail"]; 
// const SouthIndian = ["Rabot", "Salaar", "Bahubali", "KGF", "Puspa"];

// const allMovies = bollywood.concat(SouthIndian)
// console.log(allMovies);


// Array Searching method 
// 1 . IndexOf()
// console.log(arr.indexOf(40));

// 2. lastindex();
// console.log(arr.lastIndexOf(30))

// includes() 
// the value of includes in True False 
// console.log(arr.includes(40));

// sorting method
// console.log(arr.sort());

// number sort 
// const number = [75,78,999,9,2345,3,6,7,8,33,89];
// console.log(number.sort((a,b) =>b-a));
// console.log(number.sort((a,b) =>a-b));

// toString 
// console.log(arr.toString());


let arr1 = [12,23,45,67,89,890];
const target = 89;
let i;
for(i =0; i<arr1.length; i++){
    if(arr1[i] == target){
       console.log("Element found",i);
       break;
    }
}
if(i == arr1.length){
    console.log("Element not found");
}
