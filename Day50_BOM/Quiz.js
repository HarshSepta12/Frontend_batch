let Quiz = [
    {Question1: '<b>Question 1</b>. Who is the Prime Minister of India?',
    option:[
        {first: "Narendra Modi", ans: true},
        {second: "Amit Shah", ans: false},
        {third: "Arvind Kajriwal", ans: false},
        {fourth: "Rahul Gandhi", ans: false}
    ]
},
    {Question2: '<b>Question 2</b>. Who is the Prime Minister of China?',
    option:[
        {first: "Xi Jinping:", ans: false},
        {second: "Zhao Leji", ans: false},
        {third: "Wang Qishan", ans: false},
        {fourth: "Li Qiang", ans: true}
    ]
},
    {Question3: '<b>Question 3</b>. Who is the Prime Minister of Pakistan?',
    option:[
        {first: "Shehbaz Sharif", ans: false},
        {second: "Asif Ali Zardari", ans: false},
        {third: "Nawab Sharif", ans: false},
        {fourth: "Imran Khan", ans: true}
    ]
},
{Question4: '<b>Question 4</b>. Who is the Cheif Minister of Madhaya Pradesh?',
    option:[
        {first: "Bhajan Lal", ans: false},
        {second: "Dr. Mohan Yadav", ans: true},
        {third: "Yogi Aditya Nath", ans: false},
        {fourth: "Kamal Nath", ans: false}
    ]
},
{Question5: '<b>Question 5</b>. Who is the CEO of Microsoft',
    option:[
        {first: "Shantanu Narayen", ans: false},
        {second: "Bill Gates", ans: false},
        {third: "Satya Nadella ", ans: true},
        {fourth: "Salil Parekh", ans: false}
    ]
},
]

// Question 1 
const Q1 = document.querySelector('#Q-1');
const optA = document.querySelector('#a');
const optB = document.querySelector('#b');
const optC = document.querySelector('#c');
const optD = document.querySelector('#d');

    Q1.innerHTML = Quiz[0].Question1;
    optA.innerHTML = Quiz[0].option[0].first;
    optB.innerHTML = Quiz[0].option[1].second;
    optC.innerHTML = Quiz[0].option[2].third;
    optD.innerHTML = Quiz[0].option[3].fourth;

// Question 2 
const Q2 = document.querySelector('#Q-2');
const optA1 = document.querySelector('#a1');
const optB1 = document.querySelector('#b1');
const optC1 = document.querySelector('#c1');
const optD1 = document.querySelector('#d1');

    Q2.innerHTML = Quiz[1].Question2;
    optA1.innerHTML = Quiz[1].option[0].first;
    optB1.innerHTML = Quiz[1].option[1].second;
    optC1.innerHTML = Quiz[1].option[2].third;
    optD1.innerHTML = Quiz[1].option[3].fourth;


// Question 3 
const Q3 = document.querySelector('#Q-3');
const optA2 = document.querySelector('#a2');
const optB2 = document.querySelector('#b2');
const optC2 = document.querySelector('#c2');
const optD2 = document.querySelector('#d2');

    Q3.innerHTML = Quiz[2].Question3;
    optA2.innerHTML = Quiz[2].option[0].first;
    optB2.innerHTML = Quiz[2].option[1].second;
    optC2.innerHTML = Quiz[2].option[2].third;
    optD2.innerHTML = Quiz[2].option[3].fourth;

// Question 4 
const Q4 = document.querySelector('#Q-4');
const optA3 = document.querySelector('#a3');
const optB3 = document.querySelector('#b3');
const optC3 = document.querySelector('#c3');
const optD3 = document.querySelector('#d3');

    Q4.innerHTML = Quiz[3].Question4;
    optA3.innerHTML = Quiz[3].option[0].first;
    optB3.innerHTML = Quiz[3].option[1].second;
    optC3.innerHTML = Quiz[3].option[2].third;
    optD3.innerHTML = Quiz[3].option[3].fourth;


// Question 5 
const Q5 = document.querySelector('#Q-5');
const optA4 = document.querySelector('#a4');
const optB4 = document.querySelector('#b4');
const optC4 = document.querySelector('#c4');
const optD4 = document.querySelector('#d4');

    Q5.innerHTML = Quiz[4].Question5;
    optA4.innerHTML = Quiz[4].option[0].first;
    optB4.innerHTML = Quiz[4].option[1].second;
    optC4.innerHTML = Quiz[4].option[2].third;
    optD4.innerHTML = Quiz[4].option[3].fourth;



// const option1 = document.querySelector('#ope1');
const res = document.querySelector('#ans');

// Question 1 loop
for(let i = 0; i<Quiz.length; i++){
    for(let j = 0 ; j<Quiz[0].option.length; j++){
        if(Quiz[0].option[j].ans == true){
            optA.addEventListener('click', ()=>{
                document.querySelector('#res').innerHTML = `You Select Right Answer (${Quiz[0].option[j].first})`
                optA.style.backgroundColor = 'rgb(75, 177, 75)'
            })
        }else{
            optB.addEventListener('click', ()=>{
                document.querySelector('#res').innerHTML = "You Select Wrong Answer"
                optB.style.backgroundColor = 'red'
            })
            optC.addEventListener('click', ()=>{
                document.querySelector('#res').innerHTML = "You Select Wrong Answer"
                optC.style.backgroundColor = 'red'
            })
            optD.addEventListener('click', ()=>{
                document.querySelector('#res').innerHTML = "You Select Wrong Answer"
                optD.style.backgroundColor = 'red'
            })
        }
    }
}

// Question 2 loop  
for(let k = 0; k<Quiz.length; k++){
    for(let l = 0 ; l<Quiz[1].option.length; l++){
        if(Quiz[1].option[l].ans == true){
            optD1.addEventListener('click', ()=>{
                document.querySelector('#res2').innerHTML = `You Select Right Answer`
                optD1.style.backgroundColor = 'rgb(75, 177, 75)'
            })
        }else{
            optB1.addEventListener('click', ()=>{
                document.querySelector('#res2').innerHTML = "You Select Wrong Answer"
                optB1.style.backgroundColor ='red'
            })
            optC1.addEventListener('click', ()=>{
                document.querySelector('#res2').innerHTML = "You Select Wrong Answer"
                optC1.style.backgroundColor = 'red'
            })
            optA1.addEventListener('click', ()=>{
                document.querySelector('#res2').innerHTML = "You Select Wrong Answer"
                optA1.style.backgroundColor = 'red'
            })
        }
    }
}

// Question 3 loop  
for(let m = 0; m<Quiz.length; m++){
    for(let n = 0 ; n<Quiz[2].option.length; n++){
        if(Quiz[2].option[n].ans == true){
            optD2.addEventListener('click', ()=>{
                document.querySelector('#res3').innerHTML = `You Select Right Answer`
                optD2.style.backgroundColor = 'rgb(75, 177, 75)'
            })
        }else{
            optB2.addEventListener('click', ()=>{
                document.querySelector('#res3').innerHTML = "You Select Wrong Answer"
                optB2.style.backgroundColor = 'red'
            })
            optC2.addEventListener('click', ()=>{
                document.querySelector('#res3').innerHTML = "You Select Wrong Answer"
                optC2.style.backgroundColor = 'red'
            })
            optA2.addEventListener('click', ()=>{
                document.querySelector('#res3').innerHTML = "You Select Wrong Answer"
                optA2.style.backgroundColor = 'red'
            })
        }
    }
}

// Question 4 loop 
for(let o = 0; o<Quiz.length; o++){
    for(let p = 0 ; p<Quiz[3].option.length; p++){
        if(Quiz[3].option[p].ans == true){
            optB3.addEventListener('click', ()=>{
                document.querySelector('#res4').innerHTML = `You Select Right Answer`
                optB3.style.backgroundColor = 'rgb(75, 177, 75)'
            })
        }else{
            optC3.addEventListener('click', ()=>{
                document.querySelector('#res4').innerHTML = "You Select Wrong Answer"
                optC3.style.backgroundColor = 'red'
            })
            optD3.addEventListener('click', ()=>{
                document.querySelector('#res4').innerHTML = "You Select Wrong Answer"
                optD3.style.backgroundColor = 'red'
            })
            optA3.addEventListener('click', ()=>{
                document.querySelector('#res4').innerHTML = "You Select Wrong Answer"
                optA3.style.backgroundColor = 'red'
            })
        }
    }
}

// Question 5
for(let q = 0; q<Quiz.length; q++){
    for(let r = 0 ; r<Quiz[4].option.length; r++){
        if(Quiz[4].option[r].ans == true){
            optC4.addEventListener('click', ()=>{
                document.querySelector('#res5').innerHTML = `You Select Right Answer`
                optC4.style.backgroundColor = 'rgb(75, 177, 75)'
            })
            
        }else{
            optB4.addEventListener('click', ()=>{
                document.querySelector('#res5').innerHTML = "You Select Wrong Answer"
                optB4.style.backgroundColor = 'red'
            })
            optD4.addEventListener('click', ()=>{
                document.querySelector('#res5').innerHTML = "You Select Wrong Answer"
                optD4.style.backgroundColor = 'red'
            })
            optA4.addEventListener('click', ()=>{
                document.querySelector('#res5').innerHTML = "You Select Wrong Answer"
                optA4.style.backgroundColor = 'red'
            })
        }
    }
}