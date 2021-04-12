let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return this.title + " " + this.author + " " + this.pages + " " + this.read;
  };
}

function addBookToLibrary() {
  // do stuff here
}

const harryPotter = new Book("Harry Potter", "J.K. Rowling", "450", " Read");

console.log(harryPotter.info());
