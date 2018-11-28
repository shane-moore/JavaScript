let billAmount = 100 * Math.random();
function gratuity(billAmount) {
    return billAmount * 0.2;
}

function totalWithGrat(billAmount) {
   return gratuity(billAmount) + billAmount;
};
console.log(totalWithGrat(billAmount));
