import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Sorting Visualizer</a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#bubbleSort">Bubble Sort</a>
          </li>
          <li>
            <a href="#selectionSort">Selection Sort</a>
          </li>
          <li>
            <a href="#insertionSort">Insertion Sort</a>
          </li>
          <li>
            <a href="#quickSort">Quick Sort</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
