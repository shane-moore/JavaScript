// input is 3 numbers x, y, z
// output is range of ints between x and y including x and y that are divisible by k
// i.e. x = 6, y = 11, z = 2 returns 3 because three value between x and y have mod 0 when divided by z
// create array of values betweeb x and y, test if each value has mod when divided by z, att to total if not
function divisibleCount(x, y, k) {
    let total = 0;
   let divisibleArray = [];
   let index = 0;
   while( x <= y ) {

       divisibleArray[index] = x;
       x++;
       index++;
   };
   console.log(divisibleArray);
   divisibleArray.forEach( item =>{
       (item % k === 0) ? total++ : null;

       })
    console.log(total);
   };

   divisibleCount( 2, 7, 2 );