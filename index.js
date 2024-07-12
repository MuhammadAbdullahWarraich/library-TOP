const myLibrary = []

function Book(title, author, noOfPages, haveIRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.haveIRead = haveIRead;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${(this.haveIRead === true) ? "have read this" : "not read yet"}`
}

const openBookForm = document.querySelector('#open-book-form');
const closeBookForm = document.querySelector('#close-book-form');
const bookForm = document.querySelector('#book-adding-form');

openBookForm.addEventListener('click', () =>{
    bookForm.classList.add('is-open');
});
closeBookForm.addEventListener('click', () =>{
    bookForm.classList.remove('is-open');
});