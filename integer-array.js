// NaN is an integer but is not NaN

function isIntArray(arr) {
    // let flag = true;
    //     switch(arr) {
    //         case( arr.includes(NaN || null || undefined || '' ) )
    //     }

    // if(arr) {
    //     if( arr.find( num => (Number.isInteger(num) === false))) flag = false;
    //     if(arr.some(num => isNaN(num) || num === null || num === undefined )) flag = false;
    // }
    // return flag;

    let flag = true;
    
    if(arr) {
        if( arr.find( num => (Number.isInteger(num) === false))) flag = false;
        if(arr.some(num => isNaN(num))) flag = false;
    }
    if( arr === null || arr === undefined || arr === '') {
        flag = false
    }
    if( isNaN([1,2])) flag = false;
    console.log(flag);
}

isIntArray([1, 5])