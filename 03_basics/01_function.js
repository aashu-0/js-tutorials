function sayMyName(){     // defining a function
    console.log("A");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()     //calling the function; only sayMyName gives notingas it's just a reference

// function addTwonumbers(num1, num2){    // num1, num2 are parameters
    
    // console.log(num1 + num2)
// }

function addTwonumbers(num1, num2){    // num1, num2 are parameters
    
    // let result = num1 + num2
    // return result
    // console.log("aashutosh")  // after return code is unreachable
    return num1 + num2

}

 const result = addTwonumbers(3,4)    // 3 and 4 are arguments
// addTwonumbers(3,null)

// console.log("Result:", result);


function loginUserMessage(username = "Sam"){   // Sam is the default username
    if(!username){                       // !username = (username ===undefined) as undefined ==> false 
        console.log("Please enter your username")
        return
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("aashutosh"))
// console.log(loginUserMessage())


// rest(...) operator

function calculateCartPrice(val1, val2, ...num1){   // envelopes in an arraay
    return num1                                     // val1, val2 value will never be read
}

// console.log(calculateCartPrice(200, 400, 500, 600))


const user ={
    userName: "aashutosh",
    price: 1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({                      // as object
        username: "aashutosh",
        price: 399
    })

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,1000]))