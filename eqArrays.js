const eqArrays = function(a, b) {

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && (eqArrays(a[i], b[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(a[i])) && a[i] !== b[i]) { 
      return false;
    }
  } 
  return true;
};

module.exports = eqArrays;