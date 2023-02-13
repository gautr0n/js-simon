const numbers = [];
const guessNumbers = [];
let correct = 0

while (numbers.length < 5){
    let generetor = Math.floor(Math.random() * 100 + 1);
    if (!numbers.includes(generetor)){
        numbers.push(parseInt(generetor));
    }
}

alert(numbers);

setTimeout (askingNumbers, 3000)

function askingNumbers(){
    for (let i = 0 ; i < 5 ; i++){
        let asking = parseInt(prompt('indovina i numeri mostrati'));
        if (numbers.includes(asking)){
            guessNumbers.push(asking);
            correct++;
        }
    }
    console.log(guessNumbers, correct);
}