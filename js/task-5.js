'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnClick = document.querySelector(".change-color");
const colorSpan = document.querySelector('.color'); 

btnClick.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  colorSpan.textContent = newColor;
});
