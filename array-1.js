// given array of integers
// sum of integers = 0
// find triplets in an array which give the sum of zero
// filter out redundant triplets
// sort the list so you can loop from left to right
// first loop will hold track of first item
// second loop will hold track of second item
// third loop will move third item

// loop over the final array
// deconstruct the current array being looped 


const threeSum = function(nums) {
  let sortedNums = nums.sort();
  let zeroSum = [];
  for(let i = 0; i < sortedNums.length; i++) {
    for(let j = 1; j < sortedNums.length; j++) {
      let twoSum= -sortedNums[i] - sortedNums[j];
      if( sortedNums.includes( -twoSum )) {
        zeroSum.push(new Array(sortedNums[i],sortedNums[j],twoSum).sort());
      }
    }
  }
  return zeroSum;
   function arrayChecker()
};

threeSum([-1, 0, 1, 2, -1, -4]);