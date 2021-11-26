import React from "react";
import Book from "./Book";

const Shelf = ({ books, shelfTitle, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((book) => (
              <Book
                key={book.id}
                book={book}
                updateBookShelf={updateBookShelf}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
