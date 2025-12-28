'use strict';

const tbody = document.querySelector('body');
const logoBtn = document.querySelector('.logo');

logoBtn.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    resolve();
  });

  promise1.then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    tbody.appendChild(div);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  tbody.appendChild(div);
});
