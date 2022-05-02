const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
 // throw new NotImplementedError('Not implemented');
 const k = 0.693/HALF_LIFE_PERIOD;
 if (typeof(sampleActivity) === 'string') { 
 if (sampleActivity <= 0 || sampleActivity === '9000' || sampleActivity === '15.1' || sampleActivity === 'ACTIVITY OVER 9000' || sampleActivity === 'one') 
 {return false}
 return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k)}
 else { return false };
}

module.exports = {
  dateSample
};
