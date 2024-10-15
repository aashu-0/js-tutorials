const UserEmail = ""

if (UserEmail){
    console.log("Got the user Email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt(0n), "", null, undefined, Nan


// truthy values
// "0", "false", "", [], {}, function(){} => called empty function

// if (UserEmail.length === 0) {
//     console.log("Array is empty")
// }
 

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}