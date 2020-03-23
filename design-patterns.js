const obj = {
  foo: 1
};

class Foo {
  static getInstance() {
    this.foo = 1;
    this.instance = this;
    console.log(this);
    return this.instance;
  }
}

const foo1 = Foo.getInstance();
const foo2 = Foo.getInstance();
console.log(foo1 === foo2);
