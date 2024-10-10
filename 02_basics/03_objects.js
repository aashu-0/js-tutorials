//  singleton
// when we declare like literals, then no singleton
// if using constructor, then singleton
// Object.create => another method to declare objects, method is called constructor method n in this case singleton is formed.

// object literals

const mySym = Symbol("key1")   // declaring symbol datatype

const JsUser = {
    name: "aashutosh",    // key n values pairs
    "full name": "aashutosh mishra",
    // mySym: "mykey1",     // incorrect way, string datatype, not symbol
    [mySym]: "mykey1",   // correct way 
    age: 18,
    location: "Jaipur",
    email: "aashutosh@mnit.ac.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// ways to access object elements

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  //can't be accessed using .full name method
// console.log(JsUser[mySym])


JsUser.email =  "aashutosh@dr.com"  // overwrite
// Object.freeze(JsUser);
JsUser.email = "aashutosh@br.com"   // changes will not propagate as we freezed eariler
// console.log(JsUser);


JsUser.greeting = function(){
    console.log( "Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log( `Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());