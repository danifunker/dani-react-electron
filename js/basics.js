const { argv } = require("process");
const args = [];

if (argv.length < 4) {
  console.log('Please provide a number and a string');
  process.exit();

}

for (let i = 2; i < argv.length; i++) {
  args[i - 2] = argv[i];
}

let myConst = {
  var1: 'one',
  var2: 'two',
  arr1: [1, 2, 3, 4, 5, 6],
  'my cool key': 'my cool value',
  fun1: () => {
    return 'This is a function';
  },
};

// let newVarName() = argv[2];
// let var2 = argv[3];
console.log('The number of args used in this program was '.concat(args.length));
console.log('The are are the following:'.concat(...args.join(' ')));
console.log(typeof myConst);
console.log(typeof myConst.arr1);
console.log(`the putof of myConst.arr1 is ${myConst.arr1}`); //using template literals (not this does't work with the ... format)
console.log(...myConst.arr1);
console.log(`the putof of myConst.my cool key is ${myConst['my cool key']}`);
console.log('Program finished successfully');
