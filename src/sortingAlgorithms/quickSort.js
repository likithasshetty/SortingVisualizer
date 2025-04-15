export const quickSort = (array) => {
    const animations = [];
    
    const quickSortHelper = (array, low, high) => {
      if (low < high) {
        let pivotIndex = partition(array, low, high);
        quickSortHelper(array, low, pivotIndex - 1);
        quickSortHelper(array, pivotIndex + 1, high);
      }
    };
  
    const partition = (array, low, high) => {
      let pivot = array[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
          animations.push([array.slice(), [[i, j]]]);
        }
      }
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      animations.push([array.slice(), [[i + 1, high]]]);
      return i + 1;
    };
  
    quickSortHelper(array, 0, array.length - 1);
  
    return animations;
  };
  