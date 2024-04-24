// const { generateRandomNumber, celciusToFahrenheit } = require("./ultils");

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius To Fahrenheit: ${celciusToFahrenheit(0)}`);

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(`Posts Length: ${getPostsLength()}`);
