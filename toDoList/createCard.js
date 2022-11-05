let x = true;

export const createCard = (name, number, textArea, imgSrc) => {

  if(x) {
    divImage.removeChild(img);
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    btn.type = 'button';
    btn.innerText = 'Borrar todas';
    divImage.appendChild(btn);

    btn.addEventListener('click', () => {
      localStorage.clear();
      location.reload();
    });
  }

  x = false;

  const target = document.createElement('div');
  target.setAttribute('class', 'card');

  const targetInputs = document.createElement('div');
  targetInputs.setAttribute('class', 'card-inputs');

  const imgCard = document.createElement('img');
  imgCard.id = 'imgCard';
  imgCard.src = imgSrc;

  const inputName = document.createElement('p');
  inputName.id = 'inputName';
  inputName.innerHTML = `Nombre: ${name}`;

  const Number = document.createElement('p');
  Number.id = 'number';
  Number.innerHTML = `Edad: ${number}`;

  const text = document.createElement('p');
  text.id = 'text';
  text.innerHTML = `Comentarios: ${textArea}`;

  const btntrash = document.createElement('button');
  btntrash.setAttribute('class', 'btn-trash');
  btntrash.type = 'button';
  btntrash.innerHTML = '&#128465';

  target.appendChild(imgCard);
  target.appendChild(targetInputs);
  targetInputs.appendChild(inputName);
  targetInputs.appendChild(Number);
  targetInputs.appendChild(text);
  divImage.appendChild(target);
  target.appendChild(btntrash);

  btntrash.addEventListener('click', ()=> {
    divImage.removeChild(target);

    if(divImage.childNodes.length === 1){
      localStorage.clear();
      location.reload();
    }
  });

};