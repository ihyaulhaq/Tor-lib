const myLibrary = [];

function Book(title, author, pages, status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.info = function () {
  return (
    `${this.title} by ${this.author}, ${this.pages} pages, ` +
    (this.status ? "readed" : "not read yet")
  );
};

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
}

const tablebody = document.getElementById("book-table-body");

function displayBook() {
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

    tablebody.appendChild(row);
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);

document.addEventListener("DOMContentLoaded", displayBook);

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submitBtn = document.querySelector("#submit-button");

const output = document.querySelector("output");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});


dialog.addEventListener("close", (e)=>{
  output.value ="dqwvac"
})
