// Immediately Invoked Function Expressions (IIFE)

// sometimes there is problem with global pollution, so too get rid with global scope var/pollution we use iife

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();  // ()() first parenthesis for defining function and second for calling


(function aurcode() {
    console.log(`DB CONNECTED TWO`);
})();  // shows error as no semicolon in chai function


((name) => {
    // unnamed iife
    console.log(`DB CONNECTED ${name}`);
}) ('aashutosh');