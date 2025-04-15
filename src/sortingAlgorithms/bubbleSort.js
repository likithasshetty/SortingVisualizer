export const bubbleSort = (array) => {
    const animations = [];
    let n = array.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          // Swap and record the animation
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
          animations.push([array.slice(), [[j, j + 1]]]);
        }
      }
      if (!swapped) break;
    }
    return animations;
  };
  