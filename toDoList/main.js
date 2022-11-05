import {create} from './create.js';
import {createCard} from './createCard.js';

create()

let count_click = 0;

const array = [
  '../toDoList/img/vetusta.png',
  '../toDoList/img/love-of-lesbian-el-poeta-halley.jpeg',
  '../toDoList/img/jimmy.jpeg',
  '../toDoList/img/nirvana-nevermind.jpeg',
  '../toDoList/img/sgt.jpeg',
  '../toDoList/img/velvet.jpeg',
];

const array1 = ['a', 'b', 'c', 'd'];

let targetCounter = 0;


form.addEventListener('submit', (e)=>{

  e.preventDefault();

  const data = Object.fromEntries(
    new FormData(e.target)
  );
  const errorInput = document.createElement('div');
  const errorNumber = document.createElement('div');
  const errorTextArea = document.createElement('div');

  const expReg = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
  const expRegNumber = /^[1-9]+$/;

  if(data.name.match(expReg) === null){
    console.log(data.name.match(expReg));
    errorInput.setAttribute('class', 'error');
    errorInput.innerText = 'Introduce un nombre valido';
    root.appendChild(errorInput);

    setTimeout(() => {
      root.removeChild(errorInput);
    }, 3000);

    input.value = '';

    return false;
  }

  if(data.number.match(expRegNumber) === null){

    errorNumber.setAttribute('class', 'errorNumber');
    errorNumber.innerText = 'Introduce un numero valido';
    root.appendChild(errorNumber);

    setTimeout(() => {
      root.removeChild(errorNumber);
    }, 3000);

    inputNumber.value = '';

    return false;
  }

  if(data.textArea.match(expReg) === null){
    errorTextArea.setAttribute('class', 'errorTextArea');
    errorTextArea.innerText = 'Introduce caracteres validos';
    root.appendChild(errorTextArea);

    setTimeout(() => {
      root.removeChild(errorTextArea);
    }, 3000);

    textArea.value = '';

    return false;
  }

  localStorage.setItem('name'+array1[targetCounter], data.name);
  localStorage.setItem('age'+array1[targetCounter], data.number);
  localStorage.setItem('textArea'+array1[targetCounter], data.textArea);
  localStorage.setItem('img'+array1[targetCounter], array[count_click]);

  if(targetCounter === 0){
    const inputNameLs = localStorage.getItem('namea');
    const inputNumberLs = localStorage.getItem('agea').toString();
    const inputAreaLs = localStorage.getItem('textAreaa');
    const imgls = localStorage.getItem('imga');
    createCard(inputNameLs, inputNumberLs, inputAreaLs, imgls);
  }

  if(targetCounter === 1){
    const inputNameLsb = localStorage.getItem('nameb');
    const inputNumberLsb = localStorage.getItem('ageb');
    const inputAreaLsb = localStorage.getItem('textAreab');
    const imglsb = localStorage.getItem('imgb');
    createCard(inputNameLsb, inputNumberLsb, inputAreaLsb, imglsb);
  }

  if(targetCounter === 2){
    const inputNameLsc = localStorage.getItem('namec');
    const inputNumberLsc = localStorage.getItem('agec');
    const inputAreaLsc = localStorage.getItem('textAreac');
    const imglsc = localStorage.getItem('imgc');
    createCard(inputNameLsc, inputNumberLsc, inputAreaLsc, imglsc);
  }

  if(targetCounter === 3){
    const inputNameLsd = localStorage.getItem('named');
    const inputNumberLsd = localStorage.getItem('aged');
    const inputAreaLsd = localStorage.getItem('textAread');
    const imglsd = localStorage.getItem('imgd');
    createCard(inputNameLsd, inputNumberLsd, inputAreaLsd, imglsd);
    submit.disabled = true;
  }

  //createCard(data.name, data.number, data.textArea, array[count_click]);

  input.value = '';
  inputNumber.value = '';
  textArea.value = '';

  targetCounter = targetCounter + 1;

});

divArrowRight.addEventListener('click', ()=> {
  setTimeout(()=>{
    count_click += 1;

    if(count_click === array.length){
      count_click = 0;
      console.log(count_click);
    }
    imgCarro.src = array[count_click];

  },300);

});


divArrowLeft.addEventListener('click', ()=> {

  setTimeout(()=>{
    count_click -= 1;

    if(count_click < 0){
      count_click = array.length-1;
      console.log(count_click);
    }
    imgCarro.src = array[count_click];
  },500);

  console.log(count_click);

});

if(localStorage.getItem('namea')){
  let inputNameLs = localStorage.getItem('namea');
  let inputNumberLs = localStorage.getItem('agea');
  let inputAreaLs = localStorage.getItem('textAreaa');
  let imgls = localStorage.getItem('imga');
  createCard(inputNameLs, inputNumberLs, inputAreaLs, imgls);
}

if(localStorage.getItem('nameb')){
  let inputNameLsb = localStorage.getItem('nameb');
  let inputNumberLsb = localStorage.getItem('ageb');
  let inputAreaLsb = localStorage.getItem('textAreab');
  let imglsb = localStorage.getItem('imgb');
  createCard(inputNameLsb, inputNumberLsb, inputAreaLsb, imglsb);
}

if(localStorage.getItem('namec')){
  let inputNameLsc = localStorage.getItem('namec');
  let inputNumberLsc = localStorage.getItem('agec');
  let inputAreaLsc = localStorage.getItem('textAreac');
  let imglsc = localStorage.getItem('imgc');
  createCard(inputNameLsc, inputNumberLsc, inputAreaLsc, imglsc);
}

if(localStorage.getItem('named')){
  let inputNameLsd = localStorage.getItem('named');
  let inputNumberLsd = localStorage.getItem('aged');
  let inputAreaLsd = localStorage.getItem('textAread');
  let imglsd = localStorage.getItem('imgd');
  createCard(inputNameLsd, inputNumberLsd, inputAreaLsd, imglsd);
  submit.disabled = true;
}
