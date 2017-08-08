// #MAP

// Now we know the following complex data structures:
// Objects for storing keyed collections.
// Arrays for storing ordered collections.

// ## Map
// Map is a collection of keyed data items. Just like an Object. But the main difference is that Map allows keys of any type.

// ## Method
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – clears the map
// map.size – is the current elements count.

// for Instance:

let map = new Map();

map.set(1,'hello cucu');
map.set('2','color me');
map.set(true,'dung roi');

console.log(map.get(1));
console.log(map.get(true));
console.log(map.size);

// use object as a key
let john = { name: "John" };
// for every user, let's store his visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);
console.log( visitsCountMap.get(john) ); // 123


// 1.Pass Object to Map 
let mapObject = new Map(Object.entries({
  name: "John",
  age: 30
}));

// Object.entries will pass to array items of key/value pairs
console.log(mapObject);

// 2. Pass key value pairs to MAP
let mapPairs = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log(mapPairs);

// 3.Iteration for MAP

let recipeMap = new Map([
	['pho', 40000],
	['bun bo', 35000],
	['com tam', 40000]
]);

// iterate over keys
for(let monan of recipeMap.keys()) {
	console.log(monan);
}
// iterate over values
for(let gia of recipeMap.values()) {
	console.log(gia);
}
// iterate over both key/value
for (let mon of recipeMap) {
	console.log(mon);
}

// 4.forEach - builtin method the same to Array
recipeMap.forEach((value,key,map) => {
	console.log(`${key} : ${value}`);
});
