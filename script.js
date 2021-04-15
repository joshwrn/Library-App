/* UI Script */

/* Get Elements */
const root = document.documentElement;
const toggle = document.getElementById("toggle");
const changeToggle = document.getElementById("change-toggle");
const expandButton = document.getElementById("expand-btn");
const expandSideButton = document.getElementById("expand-side");
const expandSideButtonIcon = document.getElementById("expand-side-icon");
const container = document.getElementById("container");

/* expand button */

let currentSize = "mini";
expandButton.onclick = function () {
  if (currentSize == "mini") {
    container.style.setProperty("width", "85vw");
    container.style.setProperty("height", "85vh");
    currentSize = "expanded";
    expandButton.innerHTML = "toggle_on";
    expandSideButtonIcon.innerHTML = "close_fullscreen";
    console.log("expanded");
  } else {
    container.style.setProperty("width", "500px");
    container.style.setProperty("height", "650px");
    currentSize = "mini";
    expandButton.innerHTML = "toggle_off";
    expandSideButtonIcon.innerHTML = "open_in_full";
    console.log("mini");
  }
};

expandSideButton.onclick = function () {
  if (currentSize == "mini") {
    container.style.setProperty("width", "85vw");
    container.style.setProperty("height", "85vh");
    currentSize = "expanded";
    expandButton.innerHTML = "toggle_on";
    expandSideButtonIcon.innerHTML = "close_fullscreen";
    console.log("expanded");
  } else {
    container.style.setProperty("width", "500px");
    container.style.setProperty("height", "650px");
    currentSize = "mini";
    expandButton.innerHTML = "toggle_off";
    expandSideButtonIcon.innerHTML = "open_in_full";
    console.log("mini");
  }
};

/* Dark Mode Toggle */

let currentMode = "light";
toggle.onclick = function () {
  if (currentMode == "light") {
    changeToggle.innerHTML = "dark_mode";
    currentMode = "dark";
    root.style.setProperty("--container-bg", "rgba(0, 0, 0, 0.644)");
    root.style.setProperty("--sidebar-bg", "rgba(0, 0, 0, 0.15)");
    root.style.setProperty("--btn-icon-color", "rgba(255, 255, 255, 0.65)");
    root.style.setProperty(
      "--btn-icon-color-hover",
      "rgb(255, 255, 255) !important"
    );
    root.style.setProperty(
      "--btn-bg-color-hover",
      "rgb(0, 0, 0 0.479) !important"
    );
    root.style.setProperty("--newlol", "0px 0px 5px rgba(0, 0, 0, 0.2)");
    root.style.setProperty(
      "--sidebar-btn-shadow-hover",
      "0px 1px 5px rgba(0, 0, 0, 0.205)"
    );
    root.style.setProperty("--book-shadow", "rgba(0, 0, 0, 0.479)");
    root.style.setProperty(
      "--book-shadow-hover",
      "0px 3px 10px rgba(0, 0, 0, 0.205)"
    );
    root.style.setProperty(
      "--border-color",
      "border: 1px solid rgba(0, 0, 0, 0.281)"
    );
    root.style.setProperty("--medium-btn-bg-color", "rgba(0, 0, 0, 0.322)");
    root.style.setProperty("--input-place-color", "rgba(255, 255, 255, 0.5)");
    root.style.setProperty(
      "--input-textarea-color",
      "rgba(255, 255, 255, 0.75)"
    );
    root.style.setProperty("--input-focus-color", "rgba(145, 145, 145, 0.38)");
    root.style.setProperty("--input-box-color", "rgba(145, 145, 145, 0.25)");
    root.style.setProperty("--page-heading-color", "rgba(255, 255, 255, 0.75)");
    console.log("dark mode enabled");
  } else {
    changeToggle.innerHTML = "light_mode";
    currentMode = "light";
    root.style.setProperty("--container-bg", "rgba(255, 255, 255, 0.644)");
    root.style.setProperty("--sidebar-bg", "rgba(255, 255, 255, 0.15)");
    root.style.setProperty("--btn-icon-color", "rgba(0, 0, 0, 0.65)");
    root.style.setProperty("--btn-icon-color-hover", "rgb(0, 0, 0) !important");
    root.style.setProperty(
      "--btn-bg-color-hover",
      "rgb(255, 255, 255 0.479) !important"
    );
    root.style.setProperty("--newlol", "0px 0px 5px rgba(105, 105, 105, 0.2)");
    root.style.setProperty(
      "--sidebar-btn-shadow-hover",
      "0px 1px 5px rgba(105, 105, 105, 0.205)"
    );
    root.style.setProperty("--book-shadow", "rgba(0, 0, 0, 0.479)");
    root.style.setProperty(
      "--book-shadow-hover",
      "0px 3px 10px rgba(31, 31, 31, 0.205)"
    );
    root.style.setProperty(
      "--border-color",
      "border: 1px solid rgba(0, 0, 0, 0.281)"
    );
    root.style.setProperty(
      "--medium-btn-bg-color",
      "rgba(255, 255, 255, 0.322)"
    );
    root.style.setProperty("--input-place-color", "rgba(0, 0, 0, 0.5)");
    root.style.setProperty("--input-textarea-color", "rgba(0, 0, 0, 0.75)");
    root.style.setProperty("--input-focus-color", "rgba(145, 145, 145, 0.38)");
    root.style.setProperty("--input-box-color", "rgba(145, 145, 145, 0.25)");
    root.style.setProperty("--page-heading-color", "rgba(0, 0, 0, 0.75)");
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
