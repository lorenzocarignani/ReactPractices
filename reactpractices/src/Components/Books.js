import React from "react";
import books from "./BookArr";

const Book = ({ title, rating }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p style={{ fontWeight: rating > 9 ? "bold" : "normal" }}>{rating}</p>
    </div>
  );
};

const Books = () => {
  const filteredBooks = books.filter((book) => book.rating > 8);

  return (
    <div>
      {filteredBooks.map((book, index) => (
        <Book key={index} title={book.title} rating={book.rating} />
      ))}
    </div>
  );
};

export default Books;
