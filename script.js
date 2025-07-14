const myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  info() {
    return (
      `${this.title} by ${this.author}, ${this.pages} pages, ` +
      (this.status ? "readed" : "not read yet") +
      this.id
    );
  }

  changeStatus(){
    this.status = !this.status;
  }
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
}

const tablebody = document.getElementById("book-table-body");

function displayBook() {
  tablebody.innerHTML = "";
  myLibrary.forEach((book) => {
    const row = document.createElement("tr");

    let readStatus = book.status ? "readed" : "unread";

    const titleCell = document.createElement("td");
    titleCell.classList.add("tg-0lax");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.classList.add("tg-0lax");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.classList.add("tg-0lax");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const statusCell = document.createElement("td");
    statusCell.classList.add("tg-0lax");
    statusCell.textContent = readStatus;
    row.appendChild(statusCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-book-btn");
    deleteButton.setAttribute("data-id", book.id);
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    const changeStatusCell = document.createElement("td");
    const changeStatusButton = document.createElement("button");
    changeStatusButton.textContent = "Change";
    changeStatusButton.classList.add("change-status-btn");
    changeStatusButton.setAttribute("data-id", book.id);
    changeStatusCell.appendChild(changeStatusButton);
    row.appendChild(changeStatusCell);
    tablebody.appendChild(row);
  });
}

function deleteBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);

  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBook();
  }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);

document.addEventListener("DOMContentLoaded", () => {
  displayBook();

  tablebody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-book-btn")) {
      const bookIdToDelete = event.target.getAttribute("data-id");
      if (bookIdToDelete) {
        deleteBook(bookIdToDelete);
      }
    }
    if (event.target.classList.contains("change-status-btn")) {
      const bookIdToSwitch = event.target.getAttribute("data-id");
      if (bookIdToSwitch) {
        const bookToToggle = myLibrary.find(
          (book) => book.id === bookIdToSwitch
        );
        if (bookToToggle) {
          bookToToggle.changeStatus();
          displayBook();
        }
      }
    }
  });
});

const dialog = document.getElementById("bookDialog");
const showButton = document.getElementById("new-book-btn");
const closeButton = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("sumbit-btn");

const output = document.querySelector("output");

const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const pagesNum = document.querySelector("#pages-number");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", () => {
  if (dialog.returnValue === "submitted") {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = parseInt(pagesNum.value, 10);
    const status =
      document.querySelector('input[name="status"]:checked').value === "true";

    if (title && author && !isNaN(pages)) {
      addBookToLibrary(title, author, pages, status);
      displayBook();
      output.textContent = `Book Added:\nTitle: ${title}\nAuthor: ${author}\nPages: ${pages}\nStatus: ${
        status ? "Read" : "Unread"
      }`;
    } else {
      output.textContent = "Please fill in all required fields.";
    }
  } else {
    output.textContent = "";
  }
  dialog.querySelector("form").reset();
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    bookTitle.checkValidity() &&
    bookAuthor.checkValidity() &&
    pagesNum.checkValidity()
  ) {
    dialog.close("submitted");
  } else {
    console.log("Form is not valid, dialog remains open.");
  }
});

const book = document.querySelectorAll("[]");
