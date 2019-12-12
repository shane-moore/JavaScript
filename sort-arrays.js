function sortMe( names ) {

console.log(names.sort( (a,b) => a.toLowerCase() > b.toLowerCase() ));
}

sortMe(["C", "d", "a", "B"])