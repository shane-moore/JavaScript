// loop over array1 and see if each element includes a value from array 2
// if so, remove, else continue
// return array 1

const array_diff = (a,b) => {
    // let fillMeUp = []
    // a = a.forEach( val => {
    //     if(!b.includes(val)) {
    //         fillMeUp.push(val);
    //     };
    // } );
    // console.log(fillMeUp);
    // a = a.reduce( (distinct, val) => {
    //     if(!b.includes(val)) {
    //         distinct.push(val);
    //     } else return distinct;
    //     return distinct;
        
    // }, [] );
    a = a.filter( val => !b.includes(val) )
    return a;
}
array_diff([1,2], [1]);