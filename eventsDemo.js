import { EventEmitter } from "events";

// Events are great for realtime apps
const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(`Hello ${name}`);
}

function goodbyeHandler(name) {
  console.log(`Goodbye ${name}`);
}

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "Bob");

// Error handling
myEmitter.on("error", (err) => {
  console.log("An Error Occurred:", err);
});

// Simulate error
myEmitter.emit("error", new Error("Hi I am an ERROR!!!!"));
