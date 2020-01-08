// use \n for newlines between each line
// spaces to left and right are 0 for height - 1 on either side for first *
// add 2 stars as you make each new layer
// start with one start and increase

function christmasTree(height) {
    let tree = "";
    let padding = height - 1;
    let treeLayer = "*";
    for( let i = 0; i < height; i++ ) {
        tree += "\n";
        tree += " ".repeat( padding ) + treeLayer + " ".repeat( padding );
        treeLayer += "**"
        padding += - 1;
    }
    return tree;
}

christmasTree(5);