// 3 piles of casino chips - white, green, black
// take two chips of diff colors each day to casino but can't be same color
// have counter start at 0
// if values in arr[0] && arr[1], arr[0] = arr[0] - 1 && arr[1] = arr[1] -1, repeat

const solve = arr => {

    let [a,b,c] = arr.sort((x, y) => x - y);
    console.log([a,b,c])
}


solve([8, 2, 8]);