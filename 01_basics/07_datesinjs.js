// Dates

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 21)
// let myCreatedDate = new Date(2024, 0, 21, 5, 3)

// let myCreatedDate = new Date("2024-09-17")
let myCreatedDate = new Date("01-01-2024")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // changing from millisec to sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate() +1);
console.log(newDate.getDay());


newDate.toLocaleDateString('default', {
    weekday: "long",
})