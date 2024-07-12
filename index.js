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
    renderBook(myLibrary.length - 1);
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
    bookForm.classList.remove('is-open');
    e.preventDefault();
});

function toggleReadStatus(button) {
    if (button.classList.contains('have-read-this')) {
        button.classList.remove('have-read-this');
        button.classList.add('not-read-yet');
        button.innerHTML = "Not Read Yet";
    } else {
        button.classList.remove('not-read-yet');
        button.classList.add('have-read-this');
        button.innerHTML = "Have Read This";
    }
}

function removeFromLibrary(bookDiv) {
    bookDiv.remove();
    let i = myLibrary.indexOf(bookDiv);
    if (-1 !== i) {
        myLibrary.splice(i, 1);
        const emptyMessage = document.querySelector("#no-books");
        emptyMessage.style.display = "block";
    }
}

function renderBook(i) {
    const emptyMessage = document.querySelector("#no-books");
    emptyMessage.style.display = "none";

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("lib-book");

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = myLibrary[i].title;
    bookDiv.appendChild(bookTitle);
    
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Authored by ${myLibrary[i].author}`;
    bookDiv.appendChild(bookAuthor);

    const haveIReadButton = document.createElement("button");
    if (myLibrary[i].haveIRead == true) {
        haveIReadButton.classList.add('have-read-this');
        haveIReadButton.innerHTML = "Have Read This";
    } else {
        haveIReadButton.classList.add('not-read-yet');
        haveIReadButton.innerHTML = "Not Read Yet";

    }
    haveIReadButton.addEventListener('click', e => {
        toggleReadStatus(e.target);
    });
    bookDiv.appendChild(haveIReadButton);

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-book");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", e => {
        removeFromLibrary(e.target.parentElement);
    });
    bookDiv.appendChild(removeButton);

    const bookContainer = document.querySelector("#book-container");
    bookContainer.appendChild(bookDiv);
}

myLibrary.push(new Book('pythonnin in Java', 'blockchain enthusiast entrepreneur', 2, false));
myLibrary.push(new Book('eateries in Lahore', 'emaciated person', 10000, false));
myLibrary.push(new Book('Programming in Javascript', 'Linus Torwalds', 5000, true));
for (let i = 0; i < myLibrary.length; i++) {
    renderBook(i);
}