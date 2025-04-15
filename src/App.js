import React from 'react';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <SortingVisualizer />
      </div>
    </div>
  );
}

export default App;
