const findKeyByValue = function(genres, value) {
  let result = "";
  for (const genre of Object.keys(genres)) {
    if (genres[genre] === value) {
      result = genre;
    } else {
      result = undefined;
    }
  }
  return result;
};
module.exports = findKeyByValue;
