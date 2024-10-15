// if statement

// const isUserLoggedIn = true

// if(isUserLoggedIn){
// }

// if (2 ==="2"){
//     console.log("executed")
// }

// temperature = 41

// if (temperature ){
//     console.log("less than 50");
// }
// else {
//     console.log("temperature is greater than 50")
// }


const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)   // const keyword scope is only inside if statement

// if (score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)   // var has global scope


// ----Short hand Notation----

// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500){
//     console.log("less than");
// } else if (balance <750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else{
//     console.log('leas than 1200');
// }


const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if ( userLoggedIn && debitcard && 2==2 ){            // $$: and
    console.log("Allow to buy Course");   
}

if (LoggedInFromEmail || LoggedInFromGoogle){       // ||: or
    console.log("User logged in");
}

// Nullish Coalescing Operator (??): null and undefined
// fallback for handling errors ( like null or undefined value)

let val1;
// val1 = 5?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15   // assign the first value 

console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

