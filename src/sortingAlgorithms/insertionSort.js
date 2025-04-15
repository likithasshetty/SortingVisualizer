export const insertionSort = (array) => {
    const animations = [];
    let n = array.length;
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        animations.push([array.slice(), [[j, j + 1]]]);
        j--;
      }
      array[j + 1] = key;
      animations.push([array.slice(), [[j + 1, i]]]);
    }
    return animations;
  };
  