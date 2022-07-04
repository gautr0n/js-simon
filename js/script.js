//impostazioni iniziali
const simonTimer = document.getElementById('timer');
const simonNumbers = document.getElementById('number');
const simonRandNumber = [];
const userNumber = [];
let randNumber = '';
let points = '0';

//funzioni
function numberRequest(){
    for (let i=0; i<5; i++) {
        userNumber[i] = prompt("inserire un numero");
        console.log(userNumber[i], userNumber);
        if (simonRandNumber.includes(userNumber[i])) {
            points++;
            console.log(points)
        }
    }
}

function alertPoints () {
alert("hai indovinato: " + points);
}

//numeri random
for (let i=0; i<5; i++){
    do {
        randNumber = Math.floor((Math.random() * 100) + 1);
        console.log(randNumber);
    } while (simonRandNumber.includes(randNumber));
    simonRandNumber.push(randNumber);
    console.log(simonRandNumber);
}

simonNumbers.innerText = simonRandNumber;

//timer

let count = 30;
simonTimer.innerText = count;

const timer = setInterval(() => {
    simonTimer.innerText = --count;

    if (count == 0) {
        clearInterval(timer);
        simonNumbers.classList.add('d-none');
    }
}, 1000);

setTimeout(numberRequest, 30200);

setTimeout(alertPoints, 30200);