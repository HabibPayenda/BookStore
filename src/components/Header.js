import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <header className="header">
    <p className="logo">
      BookStore CMS
    </p>
    <nav className="nav">
      <Link to="/">Books</Link>
      <Link className="categories" to="categories">Categories</Link>
    </nav>
  </header>
);

export default Header;
