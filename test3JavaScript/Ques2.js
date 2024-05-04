const bSearch = (arr, target) =>{
    let start = 0;
    let end = arr.length -1;
    let mid;
    

    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid]>target){
            end = mid - 1;
        }
        else if(arr[mid]<target){
            start = mid + 1;
        }
    }
    return -1;
}

let arr = [99,100,101,201,203,204,206,207,208,209,210,217,218];
let target = 208;
let result = bSearch(arr, target);
if(result == -1){
    console.log("Element not found");
}else{
    console.log("Element found at index",result);  
}