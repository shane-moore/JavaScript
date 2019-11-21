// output is text displayed next to an item
// input to function is a string array
// if two names in array, split array with an "and" string between them
// if three names, split with ,'s, and the last array elements will have an "and" string between them
// if  more than three names in array, text to display is two names, and the length of remaining people

function likes( names ) {
    switch(true) {
        case((names.length === 1)):
        {
            return `${names[0]} likes this`;
        }
        case(( names.length === 2 )):
        {
            let twoNames = names.join(" and ");
           return `${twoNames} like this`;
        }
        case(names.length === 3):
        {
            let nameThree = names.pop();
            let namesOneAndTwo = names.join(", ");
            let namesTotal = `${namesOneAndTwo} and ${nameThree} like this`;
            return namesTotal;
        }
        case((names.length > 3)):
        {
            let extraNamesLength = names.splice(2, names.length -2).length;
            let firstNames = names.join(", ");
            return `${firstNames} and ${extraNamesLength} others like this`;
        }
        default:
            return "no one likes this";

    }
}

// likes(["bob"]);
// likes(["bob", "randy"]);
likes([]);
// likes(["bob", "randy", "bill", "susan"]);
