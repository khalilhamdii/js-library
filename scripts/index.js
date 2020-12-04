/* eslint-disable no-unused-vars */
if (localStorage.length === 0) {
  localStorage.setItem("bookCounter", "0");
}

const library = (() => {
  function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  const addCount = () => {
    const value = localStorage.getItem("bookCounter");
    const counter = JSON.parse(value) + 1;
    localStorage.bookCounter = JSON.stringify(counter);
    return counter;
  };
  const checkRadioStatus = () => {
    let radioStatus;
    const radios = document.querySelectorAll('input[name="status"]');
    for (let i = 0; i < radios.length; i += 1) {
      if (radios[i].checked) {
        if (radios[i].value === "true") {
          radioStatus = true;
        } else {
          radioStatus = false;
        }
      }
    }
    return radioStatus;
  };

  const errorCheck = () => {
    let result;
    const title = document.querySelector("#title_id").value === "";
    const author = document.querySelector("#author_id").value === "";
    const pages = document.querySelector("#pages_id").value === "";
    if (title || author || pages) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

  const renderError = () => {
    const errors = [];
    if (document.querySelector("#title_id").value === "") {
      errors.push("Title shouldn't be empty!");
    }
    if (document.querySelector("#author_id").value === "") {
      errors.push("Author shouldn't be empty!");
    }
    if (document.querySelector("#pages_id").value === "") {
      errors.push("Pages shouldn't be empty!");
    }
    const divError = document.querySelector(".errors");
    const ul = document.createElement("ul");
    ul.classList.add("text-danger");
    let li;
    for (let i = 0; i < errors.length; i += 1) {
      li = document.createElement("li");
      li.innerText = errors[i];
      ul.appendChild(li);
    }
    const temp = ul.outerHTML;
    divError.innerHTML = temp;
  };

  const checkBook = (status) => (status ? "Already read" : "Not read yet");

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
      .querySelector(".status-btn");
    statusButton.innerHTML = checkBook(parsedBook.status);
  };

  const addBook = (obj, index) => {
    const container = document.querySelector(".container-fluid");
    container.innerHTML += `
      <div class="card col-3 mx-1" data-index="${index}">
  
      <div class="card-body">
        <h4 class="card-title text-center">TITLE: ${obj.title}</h4>
        <h6 card="card-author">Author: ${obj.author}</h6>
        <p class="card-text">Pages: ${obj.pages}</p>
        <a onclick= library.toggleRead(this.getAttribute("data-book")) data-book="${index}" class="card-text btn btn-success status-btn">${checkBook(
      obj.status
    )}</a>
      <a onclick= library.deleteBook(this.getAttribute("data-book")) data-book="${index}" class="btn btn-danger">Delete Book</a>
      </div>
    
    </div>
      `;
  };

  const addBookToLibrary = () => {
    if (errorCheck() === false) {
      const counter = addCount();
      const title = document.querySelector("#title_id").value;
      const author = document.querySelector("#author_id").value;
      const pages = document.querySelector("#pages_id").value;
      const status = checkRadioStatus();
      const obj = new Book(title, author, pages, status);
      const modal = document.querySelector("#myModal");
      localStorage.setItem(`Book-${counter}`, JSON.stringify(obj));
      addBook(obj, counter);
      modal.style.display = "none";
    } else {
      renderError();
    }
  };

  const showBooks = () => {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key.startsWith("Book-")) {
        const value = JSON.parse(localStorage[key]);
        const index = key.valueOf().replace(/\D/g, "");
        addBook(value, index);
      }
    }
  };
  return { toggleRead, deleteBook, addBookToLibrary, showBooks };
})();

library.showBooks();
