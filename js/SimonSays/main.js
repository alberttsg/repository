
const btnPlay = document.getElementById('btn-play')

const green = document.getElementById('square-green');
const red = document.getElementById('square-red');
const yellow = document.getElementById('square-yellow');
const blue = document.getElementById('square-blue');

const arrayComputer = [];
const arrayUSer = [];
let counter = -1;
const errorCounter = 3;
let indexComparador = 0;

red.addEventListener('click', ()=> {
  red.classList.add('scale-red');
  yellow.classList.remove('scale-yellow');
  blue.classList.remove('scale-blue');
  green.classList.remove('scale-green');
  arrayUSer.push(1);
  console.log(arrayUSer);
  console.log(arrayComputer);
  console.log(arrayUSer[indexComparador]);
  console.log(arrayComputer[indexComparador]);

  if(arrayUSer[indexComparador] != arrayComputer[indexComparador]){
    const loser = document.createElement('div');
    const father = document.getElementById('fathher');
    loser.setAttribute('class', 'loser');
    loser.innerText = 'Looooooser';
    father.appendChild(loser);

    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;

  }
  indexComparador++;
});

yellow.addEventListener('click', ()=> {
  red.classList.remove('scale-red');
  yellow.classList.add('scale-yellow');
  blue.classList.remove('scale-blue');
  green.classList.remove('scale-green');
  arrayUSer.push(2);
  console.log(arrayUSer);
  console.log(arrayComputer);
  
  console.log(arrayUSer[indexComparador]);
  console.log(arrayComputer[indexComparador]);

  if(arrayUSer[indexComparador] != arrayComputer[indexComparador]){
    const loser = document.createElement('div');
    const father = document.getElementById('fathher');
    loser.setAttribute('class', 'loser');
    loser.innerText = 'Looooooser';
    father.appendChild(loser);

    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;

  }

  indexComparador++;
});

blue.addEventListener('click', ()=> {
  red.classList.remove('scale-red');
  yellow.classList.remove('scale-yellow');
  blue.classList.add('scale-blue');
  green.classList.remove('scale-green');
  arrayUSer.push(3);
  console.log(arrayUSer);
  console.log(arrayComputer);
  console.log(arrayUSer[indexComparador]);
  console.log(arrayComputer[indexComparador]);

  if(arrayUSer[indexComparador] != arrayComputer[indexComparador]){
    const loser = document.createElement('div');
    const father = document.getElementById('fathher');
    loser.setAttribute('class', 'loser');
    loser.innerText = 'Looooooser';
    father.appendChild(loser);

    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;

  }
  indexComparador++;
});

green.addEventListener('click', ()=> {
  red.classList.remove('scale-red');
  yellow.classList.remove('scale-yellow');
  blue.classList.remove('scale-blue');
  green.classList.add('scale-green');
  arrayUSer.push(4);
  console.log(arrayUSer);
  console.log(arrayComputer);
  console.log(arrayUSer[indexComparador]);
  console.log(arrayComputer[indexComparador]);

  if(arrayUSer[indexComparador] != arrayComputer[indexComparador]){
    const loser = document.createElement('div');
    const father = document.getElementById('fathher');
    loser.setAttribute('class', 'loser');
    loser.innerText = 'Looooooser';
    father.appendChild(loser);

    red.disabled = true;
    green.disabled = true;
    yellow.disabled = true;
    blue.disabled = true;

  }
  indexComparador++;
});




const playing = () => {

  const i = setInterval(function(){
  counter ++;
  const number = Math.round(Math.random() * (4 - 1) + 1);
  arrayComputer.push(number);
  console.log(arrayComputer);

  red.classList.remove('scale-red');
  yellow.classList.remove('scale-yellow');
  blue.classList.remove('scale-blue');
  green.classList.remove('scale-green');

  if(number === 1) {
    red.classList.add('scale-red');
    console.log('rojo');
  }

  if(number === 2) {
    yellow.classList.add('scale-yellow');
    console.log('amarillo');
  }
  if(number === 3) {
    blue.classList.add('scale-blue');
    console.log('azul');

  }
  if(number === 4) {
    green.classList.add('scale-green');
    console.log('verde');
  }
  if(counter===errorCounter){
    red.classList.remove('scale-red');
    yellow.classList.remove('scale-yellow');
    blue.classList.remove('scale-blue');
    green.classList.remove('scale-green');
    arrayComputer.pop();
    clearInterval(i);
    console.log(arrayComputer);

  }

}, 1000);
}

btnPlay.addEventListener('click', ()=>{
  console.log('btn')
  playing()
})





