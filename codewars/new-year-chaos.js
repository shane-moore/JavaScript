// people in queue
// people wear sticker indicating inital spot in queue
// positions incriment from 1 at front til n at back
// can bribe to swap but still wear same sticker
//  can bribe at most 2 people

// example of 8 people 1,2,3,4,5,6,7,8 (n)
// 6 and 5 swap so 1,2,3,4,6,5,7,8

// find minimum number of bribes that got the line to this state as integer else print "Too chaotic" if line configuration is not possible

// q is an array of integers
// t is number of test cases
// always starts off 1-x so q denotes the final state and we're trying to see if it's possible and how to get there


// Complete the minimumBribes function below.
// create an array of same length as q but incriment from 1 until n
//  if any number in q is found  to be farther than -2 positions from the same index in original orray, then print "Too chaotic"
// else loop over new array and see if its value matches that of same index in initial array
// if not, it has moved. if value of original array is found to be one space away, increase counter by 1.  else increase  by 2.

// first check if arr[i] is less than arr[i+1] meaning no change

function minimumBribes(q) {
  let moves = 0;
  let chaotic = ''
  let sorted = q.slice().sort();

  q.forEach((int, i, arr) => {
    int !== sorted[i] && int !== sorted[i - 1] && int !== sorted[i - 2] && int !== sorted[i + 1] && int !== sorted[i + 2] ? chaotic = 'Too chaotic' : null;
    int === sorted[i + 1] ? moves++ : null;
    int === sorted[i + 2] ? moves += 2 : null;
  })
  //return chaotic ? chaotic : moves
  console.log(moves)
  chaotic ? console.log(chaotic) : console.log(moves)
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
