// array

const myArr = [0,1,2,3,4,5]
const myHeores = ['spider-man', 'captain-america', 'iron-man']

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) 
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(19));  // returns -1 if element is not in the array


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A:", myArr)
const mynArr1 = myArr.slice(1,3)
console.log(mynArr1);

console.log("B:", myArr)    // slice doesn't manipulate original array, it keeps it the same

const mynArr2 = myArr.splice(1,3)
console.log("C:", myArr);   // splice manipulate the original array

console.log(mynArr2);

