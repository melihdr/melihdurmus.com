import React from "react";
import { books } from "../../data/reading";
import "../css/reading.css";

function Reading() {
  let i = 0;

  return (
    <div className="reading-div">
      {books.map((book) => {
        const { bookName, author } = book;
        i = i + 1;
        return (
          <div className="book-author">
            <div>
              {i}-{bookName}
            </div>
            <div>{author}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Reading;
