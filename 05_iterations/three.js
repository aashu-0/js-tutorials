//---for of--- 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// ---Maps---

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// map rememebers the original insertion order and don't allow to have duplicate values
// console.log(map);

for (const key of map) {
    // console.log(key);    // returns both key and value pair
} 

for (const [key, value] of map) {       // returns key and value separately 
    // console.log(key, ':-', value);
}


const myObject ={
    'game1': 'minecraft',
    'game2': 'spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);  // ERROR!! : myObject is not iterable
    // for of loop is used for iteration of map, not object
}