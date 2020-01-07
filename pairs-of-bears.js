// check in strings to find all of the mating pairs of bears
// return a string containg only them
// bears are either 'B' male or '8' female
// a pear is 'B8' or '8B'

function bears(x, s){
    let bearCouple = s.match(/8B|B8/g).join('');
    console.log(bearCouple);
    return [bearCouple, bearCouple.length >= x];
}

bears(7, '8j8mB88BB85')