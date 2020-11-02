// create example that allows you to try to find the largest hour glass in the 2D array
// create brute force algorythm to find the hour glasses
// need helper function to find an hour glass in general
// need to loop over each outer array until hitting a certain point and only continue to a certain point
// always a [6][6] array
// always have numeric inputs to sub-arrays
// one loop therefore O(n) time complexity? linear to traverse through array

// variables
// sum of an hour glass
// array to hold all the sums
// array to hold hour glass values in order to then reduce to sum

// data structure just need arrays
// hour glass array changes at each loop iteration
// sum of an hour glass changes at each iteration
// hour glass sums array is pushed to at each iteration

// inner loop(j) will go from left to right at (0,0) to (3,0)
// outer loop(i) will go from row 0 until row 3

// helper function will be executed at each iteration of inner loop and will sum values:
// (i,j) + (i+1,j) + (i +2, j) + (i+1,j+1) + (i+2,j) + (i+2,j+1) + (i+2,j+2)


// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let hourGlassSumsList = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      hourGlassSumsList.push(hourGlassSum(arr, i, j));
    }
  }
  return Math.max(...hourGlassSumsList)
}

function hourGlassSum(arr, i, j) {
  return arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
}

let ex =
  [[1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]]
hourglassSum(ex);
