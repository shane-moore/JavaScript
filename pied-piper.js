// split town on the P
// if array to the left, do matching regex to count how many ~0 there are and if there are 0~, split and count

function countDeafRats(town) {
    let count = 0;
    town = town.replace(/\s/g, '');
    console.log(town);
    if(town.split('P')[0]) {
        let leftDeafRats = town.split('P')[0].match(/../g);
        leftDeafRats.forEach( rat => {
            if( rat.includes('O~') ) count++;
        } )
        console.log(leftDeafRats);
    }
    
    let rightDeafRats;
    if(town.split('P')[1]) {
        rightDeafRats = town.split('P')[1].match(/../g);
        rightDeafRats.forEach( rat => {
            if( rat.includes('~O') ) count++;
        } )
    }
    return count;

   
}

countDeafRats("PO~O~O~O~O~O~O~O~O~O~O~O~~O  O~O~~O~O");