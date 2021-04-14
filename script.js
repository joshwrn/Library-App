/* UI Script */

/* Get Elements */
const toggle = document.getElementById("toggle");
const changeToggle = document.getElementById("change-toggle");

/* Dark Mode Toggle */

let currentMode = "light";
toggle.onclick = function () {
  if (currentMode == "light") {
    changeToggle.innerHTML = "toggle_on";
    currentMode = "dark";
    console.log("dark mode enabled");
  } else {
    changeToggle.innerHTML = "toggle_off";
    currentMode = "light";
    console.log("light mode enabled");
  }
};

/* add book page UI */

const pageButtons = document.querySelectorAll("[data-page-target]");

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const openPage = document.querySelector(".add-active");
    const newPage = document.querySelector(button.dataset.pageTarget);
    closePage(openPage, newPage);
  });
});

function closePage(openPage, newPage) {
  if (openPage == null) {
    console.log("null");
  } else {
    openPage.classList.remove("add-active");
    newPage.classList.add("add-active");
  }
}

/* Add Books To Library */

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

console.log(hp.info());
console.log(hp.title);
console.log(myLibrary);
console.log(Book.prototype.isPrototypeOf(AddBookToLibrary));
