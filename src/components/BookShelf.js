import React from "react";
import Book from "./Book";

const firstBook = {
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  img: "./images/book1.jpg",
};
const secondBook = {
  title: "Clean Code",
  author: "Robert C. Martin",
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

const BookShelf = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
      </p>
      <button>click me</button>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};
export default BookShelf;
