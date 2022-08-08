function init() {
  for (let i = 1; (i = 256); i++) {
    const div = document.createElement('div');
    div.classList.add('cel');
  }
  container.appendChild(...document.querySelectorAll('cel'));
}

const container = document.querySelector('.container');
// container.setAttribute('style', 'background: blue;');
container.textContent = 'ola';
// init();
