const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  let array = [];
    if (Array.isArray(members) === true) { 
      for (let i=0; i<=members.length; i++) {
        if (typeof(members[i]) === 'string') {
         array.push(members[i].charAt(0).toUpperCase());
        } 
      }
       return array.sort().join('');
   } else  {
       return false
      }
}

module.exports = {
  createDreamTeam
};
