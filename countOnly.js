const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
}

/* Try own 
  const countOnly = function(allItems, itemsToCount) {
  const result = {};
  let count = 1;
  for (const bool in itemsToCount) {
    for (let i = 0; i < allItems.length; i++) {
      if (itemsToCount[bool] === true && bool === allItems[i]) {
        if (bool === allItems[i]) {
          result[bool] = count;
          count++;
        } else if (bool !== allItems[i]) {
          result[bool] = count;
        }
      }
    }
    count = 1;
  }
  return result;
};*/


module.exports = countOnly;