/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */


const input = require('./inputs/input')

function classifier(input) {
  function getAge(dob) {
    return Math.ceil((Date.now() - new Date(dob)) / 31557600000);
  }
  
    num = 0,
    output = input
        .sort(({ dob: a }, { dob: b }) => b.localeCompare(a))
        .reduce((acc, arr) => {
            var key = 'group' + num,
                age = getAge(arr.dob);
  
            if (!acc[key] || acc[key].members.length >= 3 || acc[key].oldest + 5 < age) {
                
                key = 'group' + ++num;
                acc[key] = { members: [], oldest: 0, sum: 0, regNos: [] };
              
            }
            acc[key].members.push(Object.assign({}, arr, { age }));
            acc[key].oldest = age;
            acc[key].sum += age;
            acc[key].regNos.push(parseInt(arr.regNo));
            return acc;
        }, {});
output['noOfGroups'] = num
return output
}


module.exports = classifier;





