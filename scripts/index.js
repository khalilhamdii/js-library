function Book(title, author, pages, status ) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
  this.info = function() {
    let bookInfo = title + " by "+author+", "+pages+", "+status 
    console.log(bookInfo);
  }
}

let localCount = localStorage.length

function addBookToLibrary() {
    const title = document.querySelector('#title_id').value
    const author = document.querySelector('#author_id').value
    const pages = document.querySelector('#pages_id').value
    const status = false 
    let obj = new Book(title, author, pages, status);
    localStorage.setItem(`Book-${localCount}`, JSON.stringify(obj))
    modal.style.display = "none";
}

function showBooks() {

  let checkBook = (status) => {
    return status ? "Already read" : "Not read yet";
  };
  
for(let i=0; i<localStorage.length; i++) {
    
}
}

function addBook(obj) {
  const container = document.querySelector(".container");
    container.innerHTML = `
    <div class="card">

    <div class="card-body">
      <h4 class="card-title"><a>`+myLibrary[i].title+`</a></h4>
      <h6 card="card-author">`+myLibrary[i].author+`</h6>
      <p class="card-text">`+myLibrary[i].pages+`</p>
      <p class="card-text">`+checkBook(myLibrary[i].status)+`</p>
    </div>
  
  </div>
    `
}

showBooks();

    