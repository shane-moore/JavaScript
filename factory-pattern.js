// if a function returns an object w/o the new keyword, it's a factory function

const createFoo = () => {
  foo: 1;
};

console.log(createFoo());

const createSquirrelObj = () => ({
  type: "colorado",
  smell: "lovely",
  skill: "landing"
});

console.log(createSquirrelObj().type);
