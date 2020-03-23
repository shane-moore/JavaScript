// currying function for pizza orders
// first parameter will be type of pizza
// another parameter will be extras and will log the order

const pizzaOrder = topping => {
  return extra => {
    console.log(`${topping} pizza with extra ${extra}`);
  };
};

const pepperoniPizza = pizzaOrder("pepperoni");
const sausagePizza = pizzaOrder("sausage");

const tarynOrder = pepperoniPizza("feta");
const shaneOrder = sausagePizza("artichoke");

console.log(tarynOrder);
console.log(shaneOrder);
