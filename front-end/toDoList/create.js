export function create () {

  const root = document.getElementById('root');

  const divLeft = document.createElement('div');
  divLeft.id = 'divLeft';

  const divImage = document.createElement('div');
  divImage.id = 'divImage';

  const img = document.createElement('img');
  img.id = 'img';
  img.src = '../toDoList/img/vetustawanda2.jpeg';

  const divForm = document.createElement('div');
  divForm.id = 'divForm';

  const form = document.createElement('form');
  form.id = 'form';

  const divArrow = document.createElement('div');
  divArrow.id = 'divArrow';

  const divArrowRight = document.createElement('div');
  divArrowRight.id = 'divArrowRight';
  divArrowRight.innerHTML = '&#10097';

  const divArrowLeft = document.createElement('div');
  divArrowLeft.id = 'divArrowLeft';
  divArrowLeft.innerHTML = 	'&#10096';

  const divImg = document.createElement('div');
  divImg.id = 'divImg';

  const input = document.createElement('input');
  input.setAttribute('placeholder', 'Nombre');
  input.setAttribute('class', 'inputs');
  input.id = 'input';
  input.type = 'text';
  input.name = 'name';

  const inputNumber = document.createElement('input');
  inputNumber.setAttribute('placeholder', 'Edad');
  inputNumber.setAttribute('class', 'inputs');
  inputNumber.id = 'inputNumber';
  inputNumber.type = 'number';
  inputNumber.name = 'number';

  const imgCarro = document.createElement('img');
  imgCarro.id = 'imgCarro';
  imgCarro.src = '../toDoList/img/vetusta.png';

  const textArea = document.createElement('textarea');
  textArea.setAttribute('placeholder', 'Escribe aqui...');
  textArea.setAttribute('class', 'inputs');
  textArea.id = 'textArea';
  textArea.name = 'textArea';

  const submit = document.createElement('input');
  submit.setAttribute('class', 'inputs');
  submit.id = 'submit';
  submit.type = 'submit';

  root.appendChild(divLeft);
  root.appendChild(divImage);

  divLeft.appendChild(divForm);
  divForm.appendChild(form);
  form.appendChild(input);
  form.appendChild(inputNumber);
  form.appendChild(textArea);
  form.appendChild(submit);
  divImage.appendChild(img);
  divImg.appendChild(imgCarro);
  divArrow.appendChild(divArrowLeft);
  divArrow.appendChild(divImg);
  divArrow.appendChild(divArrowRight);
  form.insertBefore(divArrow, form[2]);

}