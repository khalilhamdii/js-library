let myLibrary = [{title: "book1", author: "author1", page: 20, status: false}];

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

for(let i=0; i<myLibrary.length; i++) {
    const container = document.querySelector(".container");
    container.innerHTML = `
    <div class="card">

    <div class="card-body">
      <h4 class="card-title"><a>`+myLibrary[i].title+`</a></h4>
      <h6 card="card-author">`+myLibrary[i].author+`</h6>
      <p class="card-text">`+myLibrary[i].page+`</p>
      <p class="card-text">`+myLibrary[i].status+`</p>
    </div>
  
  </div>
    `
    // const card = document.createElement('div');
    // card.setAttribute('class', 'card');
    // const card_body = document.createElement('div');
    // card_body.setAttribute('class', 'card-body');
    // const card_title = document.createElement('h4');
    // card_title.innerHt
    // const card_author = document.createElement('h6');
    // card_author.setAttribute('class', 'card-author');
    // const card_pages = document.createElement('h6');
    // card_pages.setAttribute('class', 'card-pages');
    // const status = document.createElement('h6');
    // status.setAttribute('class', 'card-status');
}


