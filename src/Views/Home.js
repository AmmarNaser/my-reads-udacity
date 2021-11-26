import React, { useEffect } from "react";
import Shelf from "../Components/Shelf";
import OpenSearchIcon from "../Components/OpenSearchIcon";
import { getAll } from "../BooksAPI";
import { Link } from "react-router-dom";

const Home = ({
  setBooks,
  currentlyReading,
  wantToRead,
  read,
  updateBookShelf,
}) => {
  useEffect(() => {
    async function getAllBooks() {
      const books = await getAll();
      setBooks(books);
    }
    getAllBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to={"/"}>
          <h1>MyReads</h1>
        </Link>
      </div>
      <div className="list-books-content">
        <Shelf
          shelfTitle="Currently Reading"
          books={currentlyReading}
          updateBookShelf={updateBookShelf}
        />
        <Shelf
          shelfTitle="Want to Read"
          books={wantToRead}
          updateBookShelf={updateBookShelf}
        />
        <Shelf
          shelfTitle="Read"
          books={read}
          updateBookShelf={updateBookShelf}
        />
      </div>
      <OpenSearchIcon />
    </div>
  );
};

export default Home;
