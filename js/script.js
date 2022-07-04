//impostazioni iniziali
const simonTimer = document.getElementById('timer');
const simonNumbers = document.getElementById('number');
const simonRandNumber = [];
let randNumber = '';


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
