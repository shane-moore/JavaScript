// king of small country invites 1000 senators to party
// each senator brings bottle of wine
// one bottle is poisoned
// 10 rates each try 100 bottles pretty much
// input is array of integers [0, 9]
// each integer represents a rat who died after tasting the wine bottles
// max rat death is 6
// each rat 


function find(rats){
    // return number of poisoned bottle
    console.log(rats.reduce( (total, rat) => total + Math.pow( 2, rat ), 0 ))

}
find([3, 5, 6, 7, 8, 9]);