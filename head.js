const head = (array) => {
  const headOfArray = array[0];
  if (headOfArray === undefined) {
    return undefined;
  } else {
    return headOfArray;
  }
}

module.exports = head;
