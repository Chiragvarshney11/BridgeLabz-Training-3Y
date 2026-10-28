class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }
    issueBook() {
        if (this.isIssued) return false;
        this.isIssued = true;
        return true;
    }
    returnBook() {
        if (!this.isIssued) return false;
        this.isIssued = false;
        return true;
    }
}
const books = [
    new Book("Atomic Habits", "James Clear", "9780735211292"),
    new Book("Clean Code", "Robert C. Martin", "9780132350884"),
    new Book("The Alchemist", "Paulo Coelho", "9780061122415", true),
    new Book("Deep Work", "Cal Newport", "9781455586691"),
    new Book("The Pragmatic Programmer", "David Thomas", "9780135957059", true)
];
const available = document.querySelector("#available");
const allBooks = document.querySelector("#all-books");
const message = document.querySelector("#message");
function cardFor(book, allowReturn = false) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `<h3>${book.title}</h3><p>Author: ${book.author}</p><p>ISBN: ${book.isbn}</p><span class="pill ${book.isIssued ? "issued" : "available-pill"}">${book.isIssued ? "Issued" : "Available"}</span>${allowReturn && book.isIssued ? `<button class="return" data-isbn="${book.isbn}" type="button">Return book</button>` : ""}`;
    return card;
}
function render() {
    available.innerHTML = ""; allBooks.innerHTML = "";
    const freeBooks = books.filter((book) => !book.isIssued);
    document.querySelector("#count").textContent = `${freeBooks.length} available`;
    freeBooks.forEach((book) => available.appendChild(cardFor(book)));
    books.forEach((book) => allBooks.appendChild(cardFor(book, true)));
    if (!freeBooks.length) available.textContent = "No books are currently available.";
}
document.querySelector("#issue-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const isbn = event.currentTarget.elements.isbn.value.trim();
    const book = books.find((item) => item.isbn === isbn);
    if (!book) message.textContent = "No book found with that ISBN.";
    else if (!book.issueBook()) message.textContent = "That book is already issued.";
    else { message.textContent = `“${book.title}” issued successfully.`; event.currentTarget.reset(); }
    render();
});
allBooks.addEventListener("click", (event) => {
    const button = event.target.closest("[data-isbn]");
    if (!button) return;
    const book = books.find((item) => item.isbn === button.dataset.isbn);
    if (book && book.returnBook()) { message.textContent = `“${book.title}” returned successfully.`; render(); }
});
render();
