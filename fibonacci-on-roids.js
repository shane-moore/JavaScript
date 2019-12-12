// starts with 1, 1
// stop iteration once signature.length === n + 1
// copy signature array, push new value to new array and signature array, splice out first value from copied array
// 

function customFib(signature,indexes,n){
    let copySignature = [...signature];
    while( signature.length <= n ) {
        signature.forEach( (number, i) => {
            total = 0;
            indexes.forEach( index => {
                total += copySignature[index];
            } )
            copySignature.push(total);
            copySignature.shift();
            signature.push(total);
            console.log(signature);
        });
    }
    return signature[n];

}
// customFib([1,2,3,4],[0,1],4); // 3
customFib([1,1],[0,1],4); // 3