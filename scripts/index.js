/* eslint-disable no-unused-vars */

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
if (localStorage.length === 0) {
  localStorage.setItem('bookCounter', '0');
}
const addCount = () => {
  const value = localStorage.getItem('bookCounter');
  const counter = JSON.parse(value) + 1;
  localStorage.bookCounter = JSON.stringify(counter);
  return counter;
};
const checkRadioStatus = () => {
  let radioStatus;
  const radios = document.querySelectorAll('input[name="status"]');
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      if (radios[i].value === 'true') {
        radioStatus = true;
      } else {
        radioStatus = false;
      }
    }
  }
  return radioStatus;
};

const addBookToLibrary = () => {
  const counter = addCount();
  const title = document.querySelector('#title_id').value;
  const author = document.querySelector('#author_id').value;
  const pages = document.querySelector('#pages_id').value;
  const status = checkRadioStatus();
  const obj = new Book(title, author, pages, status);
  const modal = document.querySelector('#myModal');
  localStorage.setItem(`Book-${counter}`, JSON.stringify(obj));
  modal.style.display = 'none';
};

const checkBook = (status) => (status ? 'Already read' : 'Not read yet');

function addBook(obj, index) {
  const container = document.querySelector('.container-fluid');
  container.innerHTML += `
    <div class="card col-3 mx-1" data-index="${index}">

    <div class="card-body">
      <h4 class="card-title text-center">TITLE: ${obj.title}</h4>
      <h6 card="card-author">Author: ${obj.author}</h6>
      <p class="card-text">Pages: ${obj.pages}</p>
      <a onclick=toggleRead(this.getAttribute("data-book")) data-book="${index}" class="card-text btn btn-success status-btn">${checkBook(
  obj.status,
)}</a>
    <a onclick= deleteBook(this.getAttribute("data-book")) data-book="${index}" class="btn btn-danger">Delete Book</a>
    </div>
  
  </div>
    `;
}

const deleteBook = (index) => {
  localStorage.removeItem(`Book-${index}`);
  const book = document.querySelector(`[data-index="${index}"]`);
  book.remove();
};

const toggle = (obj) => {
  obj.status = !obj.status;
};

const toggleRead = (index) => {
  let book = document.querySelector(`[data-index="${index}"]`);
  book = localStorage.getItem(`Book-${index}`);
  const parsedBook = JSON.parse(book);
  toggle(parsedBook);
  localStorage[`Book-${index}`] = JSON.stringify(parsedBook);
  const statusButton = document
    .querySelector(`[data-index="${index}"]`)
    .querySelector('.status-btn');
  statusButton.innerHTML = checkBook(parsedBook.status);
};

const showBooks = () => {
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key !== 'bookCounter') {
      const value = JSON.parse(localStorage[key]);
      const index = key.valueOf().replace(/\D/g, '');
      addBook(value, index);
    }
  }
};

showBooks();
