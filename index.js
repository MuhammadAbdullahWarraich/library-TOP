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

function addBookToLibrary(book) {
    myLibrary.push(new Book(book.title, book.author, book.noOfPages, book.haveIRead));
    console.log(myLibrary);
}

bookForm.addEventListener("submit", (e) =>{
    let book = {};
    let attrCount = e.target.length;
    for (let i = 0; i < attrCount; i++) {
        let attrName = e.target[i].name;
        let attrValue;
        if (e.target[i].type === "checkbox") {
            attrValue = e.target[i].checked;
        } else {
            attrValue = e.target[i].value;
        }
        book[attrName] = attrValue;
    }
    addBookToLibrary(book);
    e.preventDefault();
});
