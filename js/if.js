const { argv } = require("process");

const function1 = (a, b) => {
  let finalResult = 0;

  if (b === 'jackpot') {
    finalResult = a * 90210;
  } else {
    finalResult = a * 100;
  }

  return finalResult;
};

console.log("Thank you for your input, your winnings are:")
console.log(function1(argv[2], argv[3]));
