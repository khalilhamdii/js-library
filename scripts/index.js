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

function showBooks() {
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = JSON.parse(localStorage[key]);
    addBook(value);
  }
}

function addBook(obj) {
  const container = document.querySelector(".container");
  container.innerHTML +=
    `
    <div class="card">

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
      <p class="card-text">` +
    checkBook(obj.status) +
    `</p>
    </div>
  
  </div>
    `;
}

showBooks();
