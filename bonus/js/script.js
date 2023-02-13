let numbers = [];
let guessNumbers = [];
let correct = 0

let play = document.getElementById('start');

play.addEventListener('click', start);

function start(){
    numbers = [];
    guessNumbers = [];
    correct = 0;
    genereteNumber();
    alert(numbers);
    console.log(numbers);
    setTimeout (askingNumbers, 3100);
}

function genereteNumber(){
    while (numbers.length < 5){
        let generetor = Math.floor(Math.random() * 100 + 1);
        if (!numbers.includes(generetor)){
            numbers.push(parseInt(generetor));
        }
    }
}

function askingNumbers(){
    for (let i = 0 ; i < 5 ; i++){
        let asking = parseInt(prompt('indovina i numeri mostrati'));
        if (numbers.includes(asking)){
            guessNumbers.push(asking);
            correct++;
        }
    }
    console.log(guessNumbers, correct);
    document.getElementById('result').innerHTML = `Hai indovinato ${correct} numeri: ${guessNumbers}`;
}