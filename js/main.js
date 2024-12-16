'use strict'

const input = document.querySelector('.form__input');
const addBtn = document.getElementById('add-to-list');
const clear = document.getElementById('clear');
const form = document.querySelector('.form');
const list = document.querySelector('.list');
const countTask = document.querySelector('.title')
let item;
let tasks = [];
let arr = JSON.parse(localStorage.getItem('todoes'));

function getTask() {
  let todoes = localStorage.getItem('todoes');
  return todoes ? JSON.parse(todoes) : [];
};

function loadTask() {
  let task = getTask();
  task.forEach(e => addItem(e));
}

loadTask();

function addItem(text) {
  if (text) {
    item =
      `
     <li class="list__item item">
          <div class="item__wrapper">
            <h2 class="item__text">${text}</h2>
            <button class="item__remove icon icon--delete" type="button"></button>
          </div>
        </li>
    `;
    tasks.push(`${text}`);
    localStorage.setItem('todoes', JSON.stringify(tasks));
    list.insertAdjacentHTML('beforeend', item);
    countTask.textContent = `You have a ${list.children.length} task`;
    input.value = '';
  };
};

addBtn.addEventListener('click', () => {
  addItem(input.value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addItem(input.value);
});

list.addEventListener('click', (e) => {
  let oldItem = e.target.closest('.item');
  if (e.target.classList.contains('item__remove')) {
    let oldItemText = oldItem.querySelector('h2').textContent;
    tasks = tasks.filter((t) => t !== oldItemText)
    localStorage.setItem('todoes', JSON.stringify(tasks));
    oldItem.remove();
    countTask.textContent = `You have a ${list.children.length} task`;
  }

  if (!list.children.length) {
    countTask.textContent = '';
  };
});

