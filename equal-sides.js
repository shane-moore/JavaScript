// given array of ints
// find index, N, where sum of ints to left is equal to sum of ints on right
// if not found, return -1
// set index 0 === 0
// accum all values in array and compare to  0
// next check will be to loop over array and split array at the given looping index then accum values to left and right. if find a match, return looping index else, continue loop


function findEvenIndex(arr)
{
    for(let i = 0; i <  arr.length; i++) {
        for(let i = 0; i <  arr.length; i++) {
            let leftArr = arr.slice(0, i).reduce( (total, integer) => total + integer, 0);;
            let rightArr = arr.slice(i + 1, (arr.length)).reduce((total, integer) => total + integer, 0);;
            if(leftTotal === rightTotal) {
            return i;
            }
          }
          return -1;
}

findEvenIndex([1,100,50,-51,1,1]);
findEvenIndex([5, -1, 1]);
findEvenIndex([2, 0, 2]);