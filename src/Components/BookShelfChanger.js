import { update } from "../BooksAPI";
import React from "react";

const BookShelfChanger = ({ book, onUpdateBookShelf }) => {
  const onUpdateShelf = async (event) => {
    const shelf = event.target.value;
    const bookShelves = await update(book, shelf);
    onUpdateBookShelf(book, shelf, bookShelves);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={onUpdateShelf} value={book.shelf ? book.shelf : "none"}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
