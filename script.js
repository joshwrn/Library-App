let myLibrary = [];

function Book(title, author, pages, status) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.status = status);
}

Book.prototype = {
  info: function () {
    return (
      this.title + " " + this.author + " " + this.pages + " " + this.status
    );
  },
};

AddBookToLibrary.prototype = Object.create(Book.prototype);

function AddBookToLibrary(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  myLibrary.push(new Book(title, author, pages, status));
}

let hp = new AddBookToLibrary("Harry Potter", "J.K. Rowling", "450", " Read");

const bible = new AddBookToLibrary("Bible", "jesus", "450", " Read");

console.log(hp.info());
console.log(hp.title);
console.log(myLibrary);
console.log(Book.prototype.isPrototypeOf(AddBookToLibrary));
