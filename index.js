function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

function displayBooks(){
    const shelf = document.getElementById("bookShelf");
    shelf.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookInfo = document.createElement("div");
        bookInfo.textContent = `${book.title} by ${book.author}`;
        shelf.appendChild(bookInfo);
      }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks(); // Update the display after adding a new book
}

const form = document.getElementById("addBookForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    form.reset(); // Reset the form after submission
});


displayBooks();