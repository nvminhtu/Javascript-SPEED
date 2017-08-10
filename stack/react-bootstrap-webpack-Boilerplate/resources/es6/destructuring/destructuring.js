// DESTRUCTURING

// 1. ARRAY DESTRUCTURING
let jscode = ["React","EmberJS","Angularjs"];
// - destructuring assignment
let [first,second,third] = jscode;
console.log(first);
console.log(second);

// - work with variables instead of array
let [main,sub] = "React,EmberJS".split(',');
console.log(main);
console.log(sub);

// - ignore first elements
let [,,welcome] = ["I","congrat","You come to my villa"];
console.log(welcome); // You come to my villa

// - assign to anything at the left side
let user = {};
[user.firstname,user.surname] = "Tu Nguyen".split(' ');
console.log(user.firstname);
console.log(user.surname); 

// - work with any iterable at the right side
let [a, b, c] = "abc"; // "a", "b", "c" // if at the left let [1,2,3] => wrong
console.log(a);

// looping with entries() for Object + destructuring assignment
let member = {
    name: "Tu",
    age: 29
};

for(let [key, value] of Object.entries(member)){
    console.log(`${key}:${value}`);
}

// looping with entries() for Map + destructuring assignment
let gamer = new Map();
gamer.set("name","Tu");
gamer.set("age",29);

for(let [key,value] of gamer.entries()) {
    console.log(`${key}:${value}`);
}