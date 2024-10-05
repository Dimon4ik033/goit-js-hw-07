'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('.input-create');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
  input.value = '';
});

destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  const elementsArray = [];

 for (let i = 0; i < amount; i++) {
  const newDiv = document.createElement('div'); 
  newDiv.style.width = `${30 + i * 10}px`;
  newDiv.style.height = `${30 + i * 10}px`;
  newDiv.style.backgroundColor = getRandomHexColor();
  elementsArray.push(newDiv);
}

boxesContainer.append(...elementsArray);
}