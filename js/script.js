//impostazioni iniziali
const simonTimer = document.getElementById('timer');
let simonNumbers = document.getElementById('number');
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
