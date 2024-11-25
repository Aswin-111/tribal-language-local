// template literal rest spread , destructuring promise async await arrow functions

// function greet(name,msg){
//     console.log(` Hi ${name} ${msg}`);
// }

// anonymous function
let greet = function (name, msg) {
  console.log(` Hi ${name} ${msg}`);
};

let tab = "users";
let attr = "name";
let val = "seban";


const sql = `select * from ${tab} where ${attr} = ${val}`


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


function req(name,lastname,...rest){
    console.log(name);
    console.log(lastname);
    console.log(rest);
}

req("seban","andrews")