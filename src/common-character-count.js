const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const firstArray = [...s1];
  const secondArray = [...s2];
  const firstcount = {};
  for(const char of firstArray) {
    firstcount[char] = (firstcount[char] || 0) + 1;
  };
  const secondcount ={};
  for(const char of secondArray) {
    secondcount[char] = (secondcount[char] || 0) + 1;
  };
  let commonCount = 0;
  for (let char in firstcount) {
    if (secondcount[char] ) {
      commonCount += Math.min(firstcount[char], secondcount[char]);
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
