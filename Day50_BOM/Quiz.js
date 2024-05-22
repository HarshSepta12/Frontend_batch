const question1 = document.querySelector('#q1');
// const question2 = document.querySelector('#q2');
// const question3 = document.querySelector('#q3');
// const question4 = document.querySelector('#q4');
// const question5 = document.querySelector('#q5');
const score = 0;
const index = 0;
const quiz = [
    {qs:'who is the prime minister of india',
    a:{st:'narendra modi',ans:flase},
    b:{st:'amit saha ',ans:true},
    c:{st:'narendra modi',ans:flase},
    d:{st:'narendra modi',ans:flase},
    },
    {qs:'who is the prime minister of india',
    a:{st:'narendra modi',ans:flase},
    b:{st:'amit saha ',ans:true},
    c:{st:'narendra modi',ans:flase},
    d:{st:'narendra modi',ans:flase},
    },
]
li = quiz[index].qs


const option1 = document.querySelector('#ope1');
const res = document.querySelector('#ans');

document.querySelector('#right').addEventListener('click', ()=>{
    const Ans1 = 'Narendra Modi';
    if(option1 == Ans1){
        res.innerHTML = Ans1
    }
})