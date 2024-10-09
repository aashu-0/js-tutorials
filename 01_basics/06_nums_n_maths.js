const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.8966
const otherNumber2 = 123.8966
const otherNumber3 = 1123.8966

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber2.toPrecision(3));
// console.log(otherNumber3.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));

Number
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// *************************MATHS********************

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.9));

// console.log(Math.min(4,3,6,9,7,6));

console.log(Math.random());   // always b/w zero and one
console.log((Math.random()*10) +1);   
console.log(Math.floor(Math.random()*10) +1); // 1 is added to avoid the zero value as if Math.random gives 0.something
// gives values b/w 1 and 9


const min =10
const max = 20
// b/w min and max
console.log(Math.floor(Math.random() * (max-min + 1)) + min)
