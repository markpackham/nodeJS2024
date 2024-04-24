function generateRandomNumber() {
  // Add one at the end so result can be between 1 and 100
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

module.exports = {
  generateRandomNumber,
  celciusToFahrenheit,
};
