const myLibrary = []

function Book() {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.haveIRead = haveIRead;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${(this.haveIRead === true) ? "have read this" : "not read yet"}`
}

