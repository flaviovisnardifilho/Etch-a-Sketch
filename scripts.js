function init() {
  makeGrid();
}
WIDTH = 480;
HEIGHT = WIDTH;

function makeGrid(size = 25) {
  removeGrid();
  let maxSize = Math.min(size, 50);
  if (!(maxSize <= 50 && maxSize > 0)) {
    maxSize = 25;
  }

  for (let i = 0; i < maxSize ** 2; i++) {
    const div = document.createElement('div');
    div.classList.add('div-cel');
    div.setAttribute('style', `flex-basis: ${WIDTH / maxSize}px;`);

    container.appendChild(div);
  }
  makeEvent();
}

function colorDiv(e) {
  e.stopPropagation();
  e.target.classList.add('black');
}

function removeGrid() {
  document.querySelectorAll('.div-cel').forEach(e => e.remove());
}

function gridSize() {
  let size = prompt('Wich size of the grid? (50 is max )');
  clearGrid();
  makeGrid(size);
}

function clearGrid() {
  const cels = document.querySelectorAll('div.div-cel');
  cels.forEach(e => e.classList.remove('black'));
}

const container = document.querySelector('.container');
const btnClear = document.querySelector('#clear-grid');
btnClear.addEventListener('click', clearGrid);
const btnSize = document.querySelector('#grid-size');
btnSize.addEventListener('click', gridSize);

// const cels = document.querySelectorAll('div.div-cel');
// cels.forEach(e => e.addEventListener('mouseover', colorDiv));

function makeEvent() {
  const cels = document.querySelectorAll('div.div-cel');
  cels.forEach(e => e.addEventListener('mouseover', colorDiv));
}
// console.log(cels);

init();
