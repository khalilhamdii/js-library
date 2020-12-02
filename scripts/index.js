let myLibrary = [{title: "book1", author: "author1", page: 20, status: true}];

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

function addBookToLibrary(title, author, pages, status) {
  let obj = new Book(title, author, pages, status);
  myLibrary.push(obj);
}

function showBooks() {

  let checkBook = (status) => {
    return status ? "Already read" : "Not read yet";
  };
  
for(let i=0; i<myLibrary.length; i++) {
    const container = document.querySelector(".container");
    container.innerHTML = `
    <div class="card">

    <div class="card-body">
      <h4 class="card-title"><a>`+myLibrary[i].title+`</a></h4>
      <h6 card="card-author">`+myLibrary[i].author+`</h6>
      <p class="card-text">`+myLibrary[i].page+`</p>
      <p class="card-text">`+checkBook(myLibrary[i].status)+`</p>
    </div>
  
  </div>
    `
}
}
showBooks();


const renderForm = () => {
  
}