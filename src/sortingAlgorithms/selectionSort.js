export const selectionSort = (array) => {
    const animations = [];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        // Swap and record the animation
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        animations.push([array.slice(), [[i, minIndex]]]);
      }
    }
    return animations;
  };
  