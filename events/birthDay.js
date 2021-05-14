const { EventEmitter } = require("events");

const birthDayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const myEmitter = new EventEmitter();

myEmitter.on("birthday", birthDayEventListener);

myEmitter.emit("birthday", "Tryo Asnafi");
