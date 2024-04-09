const { argv } = require("process");

const function1 = (a, b) => {
  let finalResult = 0;

  if (b === 'jackpot') {
    finalResult = a * 1000;
  } else {
    finalResult = a * 100;
  }

  return finalResult;
};

console.log(argv);
console.log(function1(argv[2], argv[3]));
