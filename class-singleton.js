// class that returns sum of 2 + 3

class Sum {
  constructor(num3, num4) {
    this.num3 = num3;
    this.num4 = num4;
  }
  static getSum() {
    this.num1 = 2;
    this.num2 = 3;
    return this.num1 + this.num2;
  }

  flexibleSum() {
    return this.num3 + this.num4;
  }
}
Sum.prototype.squirrel = "red";

const sum1 = Sum.getSum();
const sum2 = Sum.getSum();

console.log(sum1 === sum2);

let newNums = new Sum(3, 4);
console.log(newNums.flexibleSum());
console.log(newNums);
console.log(Sum.num1);
