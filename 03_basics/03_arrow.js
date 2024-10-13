const user = {
    username: "aashutosh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);  // 'this' refers to current context
        console.log(this);   // tells about the current context(or values)    
        }
}

// user.welcomeMessage()
// user.username = 'aashu'         // here context is changed
// user.welcomeMessage()

// console.log(this);   // 'this' refers to empty object

// inside the browser when we run the javascript then console.log(this); returns 'Window' object because
// in browser the global object is Window object


// function chai(){
//     let username = "aashutosh"
//     console.log(this.username);      // returns undefined as we aren't able to use 'this' inside function
// }

// chai()


// const chai = function(){
//     let username = "aashutosh";
//     console.log(this.username);
// } 

const chai = () => {            // remove the function keyword and put arrow 
    let username = "aashutosh";
    console.log(this.username);
} 

// chai()

// ----Arrow Function----
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   // called implict return

// const addTwo = (num1, num2) =>  (num1 + num2)   // with curly brases return keyword is used and with parenthesis no return

const  addTwo = (num1, num2) => ({username: "aashu"})
console.log(addTwo(3,4))


// const myArray = [2,3,4,5,6]

// myArray.forEach()