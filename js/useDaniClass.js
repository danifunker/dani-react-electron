class daniClass {
  constructor(name, year) {
    this.name = name;
    // const currentYear = new Date(Date.now()).getFullYear(); //don't actually need this variable
    this.age = new Date(Date.now()).getFullYear() - year;
  }
}

let arrNames = ['Dani', 'John', 'Jane', 'Doe'];
let arrYears = [1990, 1980, 1970, 1960];

let arrObjects = [];

arrNames.forEach((name, i) => {
  arrObjects.push(new daniClass(name, arrYears[i]));
});

arrObjects.forEach((obj) => {
  console.log(obj);
});
