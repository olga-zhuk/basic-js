const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  let array = n.toString().split('');
  let min = 0;
    for (let i = 0; i < array.length; i++){
      if (array[i] < array[i+1]){
        min = array[i]; 
      }
    }
    for (let j = 0; j<array.length; j++){
          if (array[j] == min){ array.splice(j, 1)}
        }
    return Number(array.join(''));
}

module.exports = {
  deleteDigit
};
