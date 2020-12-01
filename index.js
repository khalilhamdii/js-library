let myLibrary = [];

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



