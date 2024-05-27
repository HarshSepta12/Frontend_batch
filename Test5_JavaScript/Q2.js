function Element(arr1, arr2){
    let newArr = []
for(let i = 0; i<arr1.length; i++){
    for(let j = 0; j<arr2.length; j++){
        if(arr1[i] === arr2[j]){
            newArr.push(arr1[i])
        }
    }
}
return newArr
}

let array1 = [9,10,20,21,30];
let array2 = [10,30,21,31,30];
const result  = Element(array1,array2)
console.log(result)