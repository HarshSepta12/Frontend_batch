// charAt - to find a character in particular index of place
// const str = "Superman"
// console.log("To find length", str.length);
// console.log(str.charAt());

// for(let i = 0; i<=str.length; i++){
//     // str ki perticular index par kya he ho print kar rha he 
//     console.log(str.charAt(i)); 
// }

let str = "Education";
let str2 = str.toLowerCase();
const vowels = (str) =>{
    let vowelsCount = 0;
    let constCount = 0;
    let vowels = [];
    let consonent = [];

    for(let i = 0; i<=str2.length; i++){
        let char = str2.charAt(i);
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            vowelsCount++;
            vowels.push(char);
        }
    }
    console.log(vowels)
    console.log("Total Consonent Count = ", consonent);
    console.log(consonent);
}
vowels(str)


