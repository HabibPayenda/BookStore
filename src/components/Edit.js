import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Edit() {
  const location = useLocation();
  const book = location.state;
  return (
    <div className="viewContainer">
      <h1>Under Constraction</h1>
      <form>
        <input value={book.title} type="text" placeholder="Book Title" />
        <input value={book.author} type="text" placeholder="Book Author" />
      </form>
    </div>
  );
}
