import CloseSearchIcon from "../Components/CloseSearchIcon";
import React, { useState } from "react";
import Book from "../Components/Book";
import { search } from "../BooksAPI";
import { getAll } from "../BooksAPI";
import { useEffect } from "react";

const SearchPage = ({ updateBookShelf }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchedBooks, setSearchedBooks] = useState();
  const [shelfBooks, setShelfBooks] = useState([]);

  useEffect(() => {
    async function getAllBooks() {
      const books = await getAll();
      setShelfBooks(books);
    }
    getAllBooks();
  }, []);

  const onSearchChange = async (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    if (query.trim()) {
      const results = await search(searchTerm);
      if (!Array.isArray(results)) {
        setSearchedBooks([]);
      } else {
        setSearchedBooks(results);
      }
    } else {
      setSearchedBooks([]);
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <CloseSearchIcon />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => onSearchChange(event)}
            value={searchTerm || ""}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.map((searchedBook) => {
              const existingBook = shelfBooks.find(
                (book) => book.id === searchedBook.id
              );
              if (existingBook) searchedBook.shelf = existingBook.shelf;
              return (
                <Book
                  key={searchedBook.id}
                  book={{ ...searchedBook }}
                  updateBookShelf={updateBookShelf}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
