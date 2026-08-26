var car = {
  model: "i10",
  brand: "Hyundai",
  year: 2020,
  isAvailable: false,
  colors: ["red", "grey"],
  //   start: () => {
  //     console.log("Engine started", this);
  //   },
  start: function () {
    console.log("Engine started", this);
  },
};

// console.log(car);
// console.log(car.isAvailable);
// console.log(car["isAvailable"]);

// car.model = "verna";

// console.log(car);

// car.start();

// car.mileage = "40 kmph";

// console.log(car);

// constructor function

// function Car(model, brand, year) {
//   // {} : this

//   console.log(this);

//   this.model = model;
//   this.brand = brand;
//   this.year = year;

//   console.log(this);
// }

// var x = new Car("verna", "Hyundai", 2020);
// console.log(x);

// class

// static

// class Car {
//   // {} : this

//   model = "verna";
//   brand = "Hyundai";
//   year = 2020;
// }

// const x = new Car();
// console.log(x);
// const y = new Car();
// console.log(y);

// semi dynamic

class Car {
  // {} : this

  takeValues(model, brand, year) {
    this.model = model;
    this.brand = brand;
    this.year = year;
  }

  printInfo() {
    console.log(this);
  }
}

const x = new Car();

const y = new Car();

x.printInfo();
y.printInfo();

x.takeValues("figo", "ford", 2020);
y.takeValues("seltos", "kia", 2023);

x.printInfo();
y.printInfo();

// dynamic

class Student {
  // the constructor function automatically gets called when a object is created using a class
  constructor(name, age, gender, classStd) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.classStd = classStd;
  }

  printInfo() {
    console.log(this);
  }
}

var r = new Student("Ruchi", 23, "Female", "12th");

r.printInfo();

var marks = [23, 4, 3, 546, 4, 3, 44, 5, 3, 2];

var car = {
  model: "i10",
  brand: "Hyundai",
  year: 2020,
  isAvailable: false,
  colors: ["red", "grey"],
  start: function () {
    console.log("Engine started", this);
  },
};

for (var i in marks) {
  console.log(marks[i]);
}

for (var key in car) {
  console.log(car[key]);
}

for (const i of marks) {
  console.log(i);
}
for (const i of "marks") {
  console.log(i);
}
