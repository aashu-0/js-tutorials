const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num +10 )

// console.log(newNums)

// chaining method: using two or three methods simulatenously

const newNums = myNums
        .map( (num) => num *10)
        .map( (num) => num +1)   // in chaining the first result pass on to second one 
        .filter((num) => num >= 40 )
console.log(newNums);