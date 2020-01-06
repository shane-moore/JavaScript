// split the string, replace minus with 

function calculate(str) {
    str = str.split('plus').join(' ').split('minus').join(' -').split(' ');
    str = str.reduce((total, num) => total + Number(num), 0)
    console.log(str);
}
calculate("1plus2minus3plus4");