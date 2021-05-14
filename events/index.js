const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffee = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Kopi ${name} telah dibuat!`);
    }, 2000);
  });
};

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = async ({ name, price }) => {
  let coffee = await makeCoffee(name);
  console.log(coffee);
  makeBill(price);
};

myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });
