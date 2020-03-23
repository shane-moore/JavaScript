const iterableObj = {
  *[Symbol.iterator]() {
    let index = 0;
    const arr = [1, 2, 3];
    while (index < arr.length) {
      yield arr[index];
      index++;
    }
  }
};
for (const obj of iterableObj) {
  console.log(obj);
}
