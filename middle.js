const middle = function(array) {
  const middleOfArray = [];
  let middleIndex = 0;
  if (array.length > 2) {
    if (array.length % 2 === 1) {
      middleIndex = Math.floor(array.length / 2);
      middleOfArray.push(array[middleIndex]);
    } else {
      middleIndex = Math.floor(array.length / 2);
      middleOfArray.push(array[middleIndex - 1]);
      middleOfArray.push(array[middleIndex]);
    }
  }
  return middleOfArray;
};

module.exports = middle;
