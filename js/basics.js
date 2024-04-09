const { argv } = require("process");

if (argv.length < 4) {
  console.log('Please provide a number and a string');
  process.exit();

}

let var1 = argv[2];
let var2 = argv[3];

console.log('Program finished successfully');
