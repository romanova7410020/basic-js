const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newN = String(n);
  const objectN = [...newN];
  let maxN = 0;
  for (let i = 0; i< objectN.length; i ++) {
    const searchString = [...objectN.slice(0, i), ...objectN.slice(i + 1)].join('');
    const searchNumber = Number(searchString);
    if (searchNumber > maxN) {
      maxN = searchNumber;
    }
  }
  return maxN;
}

module.exports = {
  deleteDigit
};
