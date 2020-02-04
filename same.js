// two arrays given
// function comp(a,b) checking if two arrays have "same" elements with same multiplicies
// elemens in b are the elements of a squared
// only working with integers
// have flag set to true or false, return flag at end
// run forEach on array a, square a and see if b includes that value


// function comp(array1, array2) {
//     let truthArray = [];
//     array1.forEach( num => {
//         if( array2.includes( Number(num*num)) ) truthArray.push(true);
//         else if(array2.find(/[*]/g)) truthArray.push(false);
//         else truthArray.push(false);
//     } )
//     console.log(truthArray);
//     if(truthArray.includes(false)) return false;
//     else return true;
// }

// a = [121, 144, 19, 161, 19, 144, 19, 11];
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// console.log(Array.isArray(b))
// console.log(a[0] === b[0])
// console.log(comp(a,b));

const comp = (array1, array2) => 
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every(item => {
    const index = array2.indexOf(Math.pow(item, 2))
    return index > -1 ? array2.splice(index, 1) : false
  })

  const comp2 = (array1, array2) => {
    if(array1 == null || array2 == null) return false;
    array1.sort((a,b) => a - b); array2.sort((a,b) => a - b);
    return array1.map( v => v * v ).every( (v, i) => v === array2[i] );
  }
  
  a = [121, 144, 19, 161, 19, 144, 19, 11];
  b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];


  console.log(comp(a,b))
