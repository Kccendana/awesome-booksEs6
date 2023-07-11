export default class BookList {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('bookItems')) || [];
    this.bookListDiv = document.querySelector('#book-container');
    this.booklistHeading = document.querySelector('.list-title');
    this.form = document.querySelector('.form');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');
    this.title = this.titleInput.value;
    this.author = this.authorInput.value;

    this.displayBooks();
    this.addEventListeners();
  }

    addBook = (title, author) => {
      const book = { title, author };
      this.booksArray.push(book);
      localStorage.setItem('bookItems', JSON.stringify(this.booksArray));
      this.displayBooks();
    }

    removeBook = (index) => {
      this.booksArray.splice(index, 1);
      localStorage.setItem('bookItems', JSON.stringify(this.booksArray));
      this.displayBooks();
    }

    displayBooks = () => {
      this.bookListDiv.innerHTML = '';

      if (this.booksArray.length === 0) {
        this.bookListDiv.style.border = 'none';
        this.booklistHeading.innerHTML = 'No book on the list';
      } else {
        this.booklistHeading.innerHTML = 'All awesome books';
      }

      this.booksArray.forEach((book, index) => {
        this.bookListDiv.innerHTML += `
          <li><span><strong>"${book.title}"</strong> by <strong>${book.author}</strong></span><button class="button" id="remove" data-index="${index}">Remove</button></li>`;
        this.bookListDiv.style.border = '2px solid';
        this.removeBtns = document.querySelectorAll('.button');
        this.removeBtns.forEach((button) => {
          button.addEventListener('click', (event) => {
            const { index } = event.target.dataset;
            this.removeBook(index);
          });
        });
      });
    }

    addEventListeners = () => {
      this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.addBook(this.titleInput.value, this.authorInput.value);
        this.titleInput.value = '';
        this.authorInput.value = '';
      });
    }

    static initialize = () => {
      const booklist = new BookList();
      return booklist;
    }
}