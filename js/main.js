'use strict'

const input = document.querySelector('.form__input');
const addBtn = document.querySelector('.form__btn');
const form = document.querySelector('.form');
const list = document.querySelector('.list');
const countTask = document.querySelector('.title')
let item;

function addItem(text) {
  item =
    `
   <li class="list__item item">
        <div class="item__wrapper">
          <label class="item__check-label">
            <input class="item__check" type="checkbox" id="checkbox">  
          </label>
          <h2 class="item__text">${text}</h2>
          <button class="item__remove icon icon--delete" type="button"></button>
        </div>
      </li>
  `;
  list.insertAdjacentHTML('beforeend', item);
  // console.log(list.children.length);
  countTask.textContent = `You have a ${list.children.length} task`;
  input.value = '';
}

addBtn.addEventListener('click', () => {
  addItem(input.value);
});


list.addEventListener('click', (e) => {
  let oldItem = e.target.closest('.item');
  if (e.target.classList.contains('item__remove')) {
    oldItem.remove();
    countTask.textContent = `You have a ${list.children.length} task`;
  }

  if(!list.children.length) {
    countTask.textContent = '';
  };
});