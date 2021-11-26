import genericBookImg from "../style/imgs/generic-book-img.png";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";
import React from "react";

const Book = ({ book, updateBookShelf }) => {
  Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.thumbnail
                  ? book.imageLinks.thumbnail
                  : genericBookImg
              })`,
            }}
          >
            <BookShelfChanger book={book} onUpdateBookShelf={updateBookShelf} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.auhors ? book.authors.join("; ") : ""}
        </div>
      </div>
    </li>
  );
};

export default Book;
