const string = (str)=>{
   let str1 = str.trim()
   let letter = str1.split(" ")
   let word = letter[letter.length-1]
   console.log(`The length of last word is ${word.length} and last word is "${word}"`);
    
}
string('Superman Sharma');

