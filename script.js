const myLibrary = [];

function Book(title, author, pages, readed) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

Book.prototype.info = function () {
  return (
    `${this.title} by ${this.author}, ${this.pages} pages, ` +
    (this.readed ? "readed" : "not read yet")
  );
};

function addBookToLibrary(title, author, pages, readed) {
  const newBook = new Book(title, author, pages, readed);

  myLibrary.push(newBook);
}

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    const element = myLibrary[i];
    // console.log(
    //   `ID:${element.id}|| ${element.info()}`
    // );    
  }
} 

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);

displayBook()
