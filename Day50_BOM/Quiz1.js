let Quiz = [
    { Question: 'Who is the Prime Minister of India?', options: ["Narendra Modi", "Amit Shah", "Arvind Kajriwal", "Rahul Gandhi"], answer: "Narendra Modi" },
    { Question: 'Who is the Prime Minister of China?', options: ["Xi Jinping", "Zhao Leji", "Wang Qishan", "Li Qiang"], answer: "Li Qiang" },
    { Question: 'Who is the Prime Minister of Pakistan?', options: ["Shehbaz Sharif", "Asif Ali Zardari", "Nawab Sharif", "Imran Khan"], answer: "Imran Khan" },
    { Question: 'Who is the Chief Minister of Madhya Pradesh?', options: ["Bhajan Lal", "Dr. Mohan Yadav", "Yogi Aditya Nath", "Kamal Nath"], answer: "Dr. Mohan Yadav" },
    { Question: 'Who is the CEO of Microsoft?', options: ["Shantanu Narayen", "Bill Gates", "Satya Nadella", "Salil Parekh"], answer: "Satya Nadella" }
];

let score = 0;

function loadQuiz() {
    Quiz.forEach((q, index) => {
        const question = document.querySelector(`#Q-${index + 1}`);
        question.innerHTML = `<b>Question ${index + 1}</b>. ${q.Question}`;
        
        q.options.forEach((option, optIndex) => {
            const button = document.querySelector(`#${String.fromCharCode(97 + optIndex)}${index}`);
            button.innerHTML = option;
            button.onclick = () => checkAnswer(option, q.answer, `res${index + 1}`, button);
        });
    });
}

function checkAnswer(selected, correct, resultId, button) {
    const result = document.querySelector(`#${resultId}`);
    if (selected === correct) {
        result.innerHTML = `You Select Right Answer (${selected})`;
        button.style.backgroundColor = 'rgb(75, 177, 75)';
        score++;
    } else {
        result.innerHTML = `You Select Wrong Answer (${selected})`;
        button.style.backgroundColor = 'red';
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);
