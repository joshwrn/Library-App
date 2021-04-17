/* UI Script */

/* Get Elements */
const root = document.documentElement;
const toggle = document.getElementById("toggle");
const changeToggle = document.getElementById("change-toggle");
const darkToggleSettings = document.getElementById("dark-btn");
const expandButton = document.getElementById("expand-btn");
const expandSideButton = document.getElementById("expand-side");
const expandSideButtonIcon = document.getElementById("expand-side-icon");
const container = document.getElementById("container");
const removeBook = document.getElementById("delete");

/* background switch */

let wallpaper = document.getElementById("bg-btn");
let wallpaperToggle = "gradient";
wallpaper.onclick = function () {
  if (wallpaperToggle == "gradient") {
    document.body.style.background =
      "linear-gradient(to right, #16222a, #3a6073)";
    wallpaperToggle = "image";
    console.log("image");
    wallpaper.innerHTML = "toggle_on";
  } else {
    document.body.style.background = "";
    wallpaper.innerHTML = "toggle_off";
    wallpaperToggle = "gradient";
    console.log("gradient");
  }
};

/* expand button */
let currentSize = "mini";

let expandFunction = function () {
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

expandButton.onclick = function () {
  expandFunction();
};

expandSideButton.onclick = function () {
  expandFunction();
};

/* Dark Mode Toggle */

let nightModefunction = function () {
  if (currentMode == "light") {
    changeToggle.innerHTML = "dark_mode";
    darkToggleSettings.innerHTML = "toggle_on";
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
    darkToggleSettings.innerHTML = "toggle_off";
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

let currentMode = "light";
toggle.onclick = function () {
  nightModefunction();
};

darkToggleSettings.onclick = function () {
  nightModefunction();
};

/* change page UI */

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

let myLibrary = [
  {
    title: "version control",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/version control.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "When The Doves Disappeared",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/wtdd.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "The Illuminati",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/the illuminati.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "We All Love",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/waltbg.jpeg",
    date: "Not Read",
    status: "unread",
  },

  {
    title: "Unbecoming",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/u.webp",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "The Stargaze Sister",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/tss.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "A Bad Character",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/abc.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "Satin Island",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/si.jpg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "Esthers Inheritance",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/esthers inher.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "Human Acts",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/human acts.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "Killing Commendatore",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/killing commendatore.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "Design As Art",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/Design as Art.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "Sphinx",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/ag.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "Nocturnal Animals",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/na.jpeg",
    date: "Not Read",
    status: "unread",
  },

  {
    title: "Dracula",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/dracula.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "The Immortalist",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/the immortalist.jpeg",
    date: "Not Read",
    status: "unread",
  },
  {
    title: "psychology of imagination",
    author: "Unknown",
    pages: "200",
    cover: "photos/Book Covers/psychology of imagination.jpeg",
    date: "Not Read",
    status: "unread",
  },
];

function Book(title, author, pages, cover, date, status) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.cover = cover),
    (this.date = date),
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

function AddBookToLibrary(title, author, pages, cover, date, status) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.cover = cover),
    (this.date = date),
    (this.status = status);
  myLibrary.push(new Book(title, author, pages, cover, date, status));
}

console.log(myLibrary);

/* submit page functionality */

const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const coverInput = document.getElementById("cover-input");
const readStatus = document.getElementsByName("read-unread");
const submitBook = document.getElementById("submit-book");
const insideShelf = document.getElementById("shelf-inside");

submitBook.onclick = function () {
  if (
    titleInput.value != "" &&
    authorInput.value != "" &&
    pagesInput.value != "" &&
    coverInput.value != ""
  ) {
    let selected = document.querySelector('input[name="read-unread"]:checked');
    let currentStatus = "unread";
    if (selected.value == "read") {
      currentStatus = new Date().toLocaleDateString();
    }
    AddBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      coverInput.value,
      currentStatus,
      selected.value
    );
    clearBookInputs();
    console.log(myLibrary);
    removeAllChildNodes(insideShelf);
    myLibrary.forEach((book) => {
      addCoverToShelf(book.cover, myLibrary.indexOf(book));
    });
  }
};

/* clear new book page */

let clearBookInputs = function () {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  coverInput.value = "";
};

/* add new book cover to shelf */
let addCoverToShelf = function (newCover, data) {
  let newBookCover = document.createElement("img");
  newBookCover.className = "book";
  newBookCover.src = newCover;
  newBookCover.setAttribute("data-index", data);
  insideShelf.insertBefore(newBookCover, insideShelf.firstChild);
};

/* function to remove all books */
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/* on load function to refresh shelf */

removeAllChildNodes(insideShelf);
myLibrary.forEach((book) => {
  addCoverToShelf(book.cover, myLibrary.indexOf(book));
});

/* book page */

let bookProfileIndex = document.querySelectorAll(".book");
const bookProfileAuthor = document.getElementById("book-profile-author");
const bookProfilePages = document.getElementById("book-profile-pages");
const bookProfileDate = document.getElementById("book-profile-date");
const bookProfileTitle = document.getElementById("book-profile-title");
const bookProfileCover = document.getElementById("book-profile-cover");
const deleteBookButton = document.getElementById("delete-book-btn");
const bookProfileStatus = document.getElementById("book-profile-status");

document.addEventListener("click", (e) => {
  if (e.target.matches(".book")) {
    console.log("book " + e.target.getAttribute("data-index") + " clicked");
    currentIndex = myLibrary[e.target.getAttribute("data-index")];
    const openPage = document.querySelector(".add-active");
    const bookPage = document.getElementById("book-page");
    closePage(openPage, bookPage);
    /* set book info */
    bookProfileTitle.innerHTML =
      myLibrary[e.target.getAttribute("data-index")].title;
    bookProfileAuthor.innerHTML =
      myLibrary[e.target.getAttribute("data-index")].author;
    bookProfilePages.innerHTML =
      myLibrary[e.target.getAttribute("data-index")].pages;
    bookProfileDate.innerHTML =
      myLibrary[e.target.getAttribute("data-index")].date;
    bookProfileCover.src = myLibrary[e.target.getAttribute("data-index")].cover;
    /* delete button */
    deleteBookButton.onclick = function () {
      console.log("deleted book at " + e.target.getAttribute("data-index"));
      delete myLibrary[e.target.getAttribute("data-index")];
      e.target.remove();
      console.log(myLibrary);
      const openPage = document.querySelector(".add-active");
      const newPage = document.getElementById("shelf-page");
      closePage(openPage, newPage);
    };
    /* get read status */
    if (myLibrary[e.target.getAttribute("data-index")].status == "read") {
      bookProfileStatus.innerHTML = "turned_in";
    } else if (
      myLibrary[e.target.getAttribute("data-index")].status == "unread"
    ) {
      bookProfileStatus.innerHTML = "turned_in_not";
    }
    /* change read status */
    bookProfileStatus.onclick = function () {
      if (myLibrary[e.target.getAttribute("data-index")].status == "read") {
        console.log("marked unread");
        bookProfileStatus.innerHTML = "turned_in_not";
        myLibrary[e.target.getAttribute("data-index")].status = "unread";
        myLibrary[e.target.getAttribute("data-index")].date = "Not Read";
        bookProfileDate.innerHTML = "Not Read";
      } else if (
        myLibrary[e.target.getAttribute("data-index")].status == "unread"
      ) {
        console.log("marked read");
        bookProfileStatus.innerHTML = "turned_in";
        myLibrary[e.target.getAttribute("data-index")].status = "read";
        myLibrary[
          e.target.getAttribute("data-index")
        ].date = new Date().toLocaleDateString();
        bookProfileDate.innerHTML = new Date().toLocaleDateString();
      }
    };
  }
});
