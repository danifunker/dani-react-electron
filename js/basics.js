const { argv } = require("process");
const args = [];

if (argv.length < 4) {
  console.log('Please provide a number and a string');
  process.exit();

}

for (let i = 2; i < argv.length; i++) {
  args[i - 2] = argv[i];
}

// let newVarName() = argv[2];
// let var2 = argv[3];
console.log('The number of args used in this program was '.concat(args.length));
console.log('The are are the following:'.concat(...args.join(' ')));
console.log('Program finished successfully');
