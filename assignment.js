// template literal rest spread , destructuring promise async await arrow functions

// function greet(name,msg){
//     console.log(` Hi ${name} ${msg}`);
// }

// anonymous function
let greet = function (name, msg) {
  console.log(` Hi ${name} ${msg}`);
};
// greet("seban", "hello good morning");

function Sample(cb) {
  cb("mario");
}

Sample(function (name) {
  console.log(`Hi ${name}`);
});

function makeIcecream(cb, flav) {
  cb(flav);
}

// makeIcecream(function (flav){
//     console.log(`${flav} flavoured icream is ready`)
// },"strawberry"
// )

makeIcecream((flav) => {
  console.log(`${flav} flavoured icream is ready`);
}, "strawberry");

let sum = (num1, num2) => {
  const sum = num1 + num2;
  console.log(`${sum}`);
};

let fn = (score) => score + 10;

let mod_score = fn(6);
console.log(mod_score);
