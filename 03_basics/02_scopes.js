// let a = 0
// const b = 20
// var c = 30

// var c = 300   // >> global scope
let a = 300

if (true){      // {} => scope 
    let a = 10
    const b = 20
    // console.log("inner: ", a);   // >> block-level scope
    // c = 30
}  

// console.log(a);
// console.log(b);
// console.log(c); 

// nested scope
function one(){
    const username = "aashutosh"

    function two(){                     // child function(two) can access parent(one) variables
        const website = "aashu.xyz"
        console.log(username);
    }
    // console.log(website)    // error !! => scope of website

    two()
}
// one()

if (true){
    const username = "aashutosh"
    if (username === "aashutosh"){
        const website = " aashu.abc"
        // console.log(username + website);
    }
    // console.log(website);   // error!!
}

// console.log(username);    // error!!

// +++++++++++++++++ insteresting +++++++++++++++++

console.log(addone(5))
function addone(num){                 // :::function:::
    return num +1
}


// console.log(addTwo(4))                  // error!! can't be accessed before initialization
const addTwo = function(num){           // :::expression:::
    return num + 2  
}