function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    let bookInfo = title + " by " + author + ", " + pages + ", " + status;
    console.log(bookInfo);
  };
}

let localCount = localStorage.length;
let checkRadioStatus = () => {
  const radios = document.querySelectorAll('input[name="status"]');
  for (const radio of radios) {
    if (radio.checked) {
      return radio.value == "true" ? true : false;
    }
  }
};

function addBookToLibrary() {
  const title = document.querySelector("#title_id").value;
  const author = document.querySelector("#author_id").value;
  const pages = document.querySelector("#pages_id").value;
  const status = checkRadioStatus();
  let obj = new Book(title, author, pages, status);
  localStorage.setItem(`Book-${localCount}`, JSON.stringify(obj));
  modal.style.display = "none";
}

let checkBook = (status) => {
  return status ? "Already read" : "Not read yet";
};

// let setIndexData = (index) => {
//   const arr = document
//     .querySelector(`[data-index="${index}"]`)
//     .querySelectorAll(".index-class");
//   for (let i of arr) {
//     i.setAttribute("data-book", index);
//   }
// };

function showBooks() {
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = JSON.parse(localStorage[key]);
    let index = key.valueOf().replace(/\D/g, "");
    addBook(value, index);
  }
}

function addBook(obj, index) {
  const container = document.querySelector(".container");
  container.innerHTML +=
    `
    <div class="card" data-index="` +
    index +
    `">

    <div class="card-body">
      <h4 class="card-title"><a>` +
    obj.title +
    `</a></h4>
      <h6 card="card-author">` +
    obj.author +
    `</h6>
      <p class="card-text">` +
    obj.pages +
    `</p>
      <a onclick=toggleRead(this.getAttribute("data-book")) data-book="` +
      index +
      `" class="card-text btn btn-success status-btn">` +
    checkBook(obj.status) +
    `</a>
    <a onclick= deleteBook(this.getAttribute("data-book")) data-book="` +
    index +
    `" class="btn btn-danger">Delete Book</a>
    </div>
  
  </div>
    `;
}

let deleteBook = (index) => {
  localStorage.removeItem(`Book-${index}`);
  let book = document.querySelector(`[data-index="${index}"]`);
  book.remove();
};

let toggleRead = (index) => {
  let book = document.querySelector(`[data-index="${index}"]`);
  book = localStorage.getItem(`Book-${index}`)
  parsedBook = JSON.parse(book)
  toggle(parsedBook)
  localStorage[`Book-${index}`] = JSON.stringify(parsedBook)
  let status_button = document.querySelector(`[data-index="${index}"]`).querySelector(".status-btn")
  status_button.innerHTML = checkBook(parsedBook.status)
}

function toggle(obj) {
  obj.status = !obj.status;
}

showBooks();
