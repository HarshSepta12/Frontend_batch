let input;

const getInput = ()=>{
    input = document.querySelector('#ip1').value;

    const myElement = (msg,cls) =>{
        const p = document.createElement('p');
        p.setAttribute("class", cls);
        p.innerText = msg;
        document.body.appendChild(p);
    };
    let i 
    for(i=0; i<input.length; i++){
        let ch = input.charAt(i)
        if(ch == '!' || ch == '@' || ch == '#'|| ch == '$'){

            myElement('Your Password is super strong', 'green')
            break;
        }
    }
    if(i == input.length){
     
       myElement('Your password is weak', 'red')
       
    }
 
    // console.log(input)
}

