const palindrom = (str) =>{
    let s =0; let e = str.length-1;
    let p = true;
    while(s<e){
        if(str[s] != str[e]){
            p = false;
            break;
        }
        s++;
        e--;
    }
    if(p){
        console.log("palindrome")
    }else{
        console.log("not")
    }
    // for(let i = 0; i<str.length; i++){
    //     for(let j = str.length-1; j>=0; j--){
    //         if(str.charAt(i) == str.charAt(j)){
    //             console.log("This is palindrom")
    //         }else{
    //             console.log("This is not palindrom")
    //         }
    //         break
    //     }
    //     break;
    // }
}
let str = "Madan";
let strTouper = str.toUpperCase()
palindrom(strTouper);
