// components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
