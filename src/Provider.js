import React, { Component } from "react";

export default class Provider extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      setBooks: (books) => {
        const currentlyReading = books.filter(
          (book) => book.shelf === "currentlyReading"
        );
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        const read = books.filter((book) => book.shelf === "read");

        this.setState({
          books,
          currentlyReading,
          wantToRead,
          read,
        });
      },

      updateBookShelf: (book, newShelf) => {
        // TOFIX
        /*
        Terrible implementation :D, needs modification.
        Logic:
          * check if book already exists, if so
            * Change ONLY the required book:
              - if newShelf is none >> exclude shelf property from book object
              - if anyOtherShelf just update shelf normally
          * if book doesn't exists in myReads => updateBookList with the new one.
        */
        const updatedBookList = this.state.books.map((bookEach) => {
          const bookToChange = this.state.books.find(
            (bookItr) => bookItr.id === book.id
          );

          if (bookToChange && bookToChange.id === bookEach.id) {
            console.log(book);
            if (newShelf === "none") {
              const { shelf: none, ...removedBook } = bookEach;
              bookEach = removedBook;
            }
            bookEach.shelf = newShelf;
          }

          return bookEach;
        });

        this.state.setBooks(updatedBookList);
      },

      // updateBookShelf: (book, newShelf, bookShelves) => {
      //   const updatedBookList = this.state.books.map((bookEach) => {
      //     let bookId;
      //     if (newShelf === "none" && book.id === bookEach.id) {
      //       bookId = this.state.books.find((id) => id === bookEach.id);
      //       const { shelf: none, ...removedBook } = bookEach;
      //       console.log(bookEach, removedBook);
      //       return removedBook;
      //     } else {
      //       bookId = bookShelves[newShelf].find((id) => id === bookEach.id);
      //     }
      //     if (bookId) bookEach.shelf = newShelf;
      //     return bookEach;
      //   });
      //   this.state.setBooks(updatedBookList);
      // },
    };
  }
  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const MyContext = React.createContext();
