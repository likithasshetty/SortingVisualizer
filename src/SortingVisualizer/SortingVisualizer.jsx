import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';
import { bubbleSort } from '../sortingAlgorithms/bubbleSort';
import { selectionSort } from '../sortingAlgorithms/selectionSort';
import { insertionSort } from '../sortingAlgorithms/insertionSort';
import { quickSort } from '../sortingAlgorithms/quickSort';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  // Generate a random array of bars
  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(randomIntFromInterval(10, 600));
    }
    setArray(newArray);
  };

  // Helper function to get a random number in a range
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Visualization of sorting algorithms
  const visualizeSort = (algorithm) => {
    if (isSorting) return;

    setIsSorting(true);
    const animations = algorithm(array);
    for (let i = 0; i < animations.length; i++) {
      const [arrayState, swappedIndices] = animations[i];
      setTimeout(() => {
        setArray(arrayState);
        highlightBars(swappedIndices);
      }, i * 10);
    }
    setTimeout(() => setIsSorting(false), animations.length * 10);
  };

  // Function to highlight swapped bars
  const highlightBars = (swappedIndices) => {
    const bars = document.getElementsByClassName('bar');
    for (let i = 0; i < swappedIndices.length; i++) {
      const [bar1, bar2] = swappedIndices[i];
      bars[bar1].style.backgroundColor = 'red';
      bars[bar2].style.backgroundColor = 'red';
    }
    setTimeout(() => {
      for (let i = 0; i < swappedIndices.length; i++) {
        const [bar1, bar2] = swappedIndices[i];
        bars[bar1].style.backgroundColor = 'turquoise';
        bars[bar2].style.backgroundColor = 'turquoise';
      }
    }, 50);
  };

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="sorting-visualizer">
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${value}px`,
              width: `${(window.innerWidth / array.length) - 2}px`,
            }}
          ></div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => generateArray()} disabled={isSorting}>Generate New Bars</button>
        <button onClick={() => visualizeSort(bubbleSort)} disabled={isSorting}>Bubble Sort</button>
        <button onClick={() => visualizeSort(selectionSort)} disabled={isSorting}>Selection Sort</button>
        <button onClick={() => visualizeSort(insertionSort)} disabled={isSorting}>Insertion Sort</button>
        <button onClick={() => visualizeSort(quickSort)} disabled={isSorting}>Quick Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
