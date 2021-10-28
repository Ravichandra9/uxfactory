/* class Animal {
  constructor(eat) {
    this.eat = eat;
  }
  animaldata() {
    console.log("Animals Respirate Oxygen");
  }
  animalMov() {
    console.log(" Animals move from one place to another place ");
  }
}
class Dog extends Animal {
  constructor(eat, sound, fly, climb) {
    super(eat);
    this.eat = eat;
    this.sound = sound;
    this.fly = fly;
    this.climb = climb;
  }
  DogData() {
    console.log("The dog eat meat");
  }
}
class Lion extends Animal {
  constructor(eat, sound, fly, climb) {
    super(eat);
    this.eat = eat;
    this.sound = sound;
    this.fly = fly;
    this.climb = climb;
  }
  LionData() {
    console.log("The Lion is king of Jungle");
  }
}
const dog = new Dog("meat", "bow - bow", "no flying", "no climb");
console.log(dog);
dog.DogData();
dog.animaldata();
const lion = new Lion("meat", "Roaring", "no flying", "no climb");
console.log(lion);
lion.LionData();
lion.animalMov(); */

//get all person name based on age greater than and equal to 18

let empval = [
  { firstname: "Ravichandra", age: 22 },
  { firstname: "Radha Krishna", age: 30 },
  { firstname: "Ramakrishna", age: 17 },
  { firstname: "Anil", age: 24 },
];
let result = empval.map((val) => {
  if (val.age > 18) {
    console.log("Eligible for vote", val.firstname);
    return val.firstname;
  } else {
    console.log("Nothing to display");
  }
});
console.log(result);

// inheritence property of a plant

class Plant {
  constructor(growtime) {
    this.growtime = 5;
  }
  plantData() {
    console.log("The plant need water and sunlight to grow");
  }
}
class Mango extends Plant {
  constructor(growtime, waterrequired, sunlightrequirement) {
    super(growtime);
    this.growtime = growtime;
    this.waterrequired = waterrequired;
    this.sunlightrequirement = sunlightrequirement;
  }
  mangoData() {
    console.log("The mango plant grow by using all required essentials");
  }
}
class Sugarcane extends Plant {
  constructor(growtime, waterrequired, sunlightrequirement) {
    super(growtime);
    this.growtime = growtime;
    this.waterrequired = waterrequired;
    this.sunlightrequirement = sunlightrequirement;
  }
  sugarcaneData() {
    console.log("The sugarcane plant gives sugar to us");
  }
}
const mango = new Mango("5 years", "medium", "requried");
console.log(mango);
mango.mangoData();
mango.plantData();
const sugarcane = new Sugarcane("8 months", "heavy", "requried");
console.log(sugarcane);
sugarcane.sugarcaneData();

//destructring  an array

const arrVal = [1, 77, 55, 22, 33];
const [arr1, arr2, arr3, arr4] = arrVal;
console.log(arr1);
console.log(arr2);
console.log(arr3);

// destructring an object

var empolyee = {
  id: 442,
  salary: 25000,
  age1: 22,
};
const { id, salary, age1 } = empolyee;
console.log(id);
console.log(salary);
console.log(age1);

// sum all the elements in an array

add = (...args) => {
  let sum = 0;

  for (let element of args) {
    sum = sum + element;
  }
  console.log(sum);
};

add(19, 27, 32, 45);

// Template strings

// multiple lines

let msg = `welcome to the
Angular`;

console.log(msg);

// varible & expression subsitution

let firstname = "Ravi Chandra";
let lastname = "Gumma";
let fullname = `Hi ${firstname} ${lastname}, How are you ?`;
console.log(fullname);

// Property shorthand

let first = "Radha";
let last = "Madhav";
var emp = {
  first,
  last,
};
console.log(emp);

// checking the elements odd or even
let numArray = [1, 34, 2, 45, 47, 23, 24, 68, 98, 100];
numArray.forEach((element) => {
  let result = element % 2 == 0 ? "Even" : "Odd";
  console.log(element, "is ", result);
});

// Sum of Salaries

let empArray = [
  { salary: 56899 },
  { salary: 67799 },
  { salary: 96499 },
  { salary: 39699 },
];
let total = empArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue.salary,
  0
);
console.log("Total salary is", total);
