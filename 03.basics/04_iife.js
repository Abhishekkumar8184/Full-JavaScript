// Immediately Invoked Function Expressions (IIFE) global scope pallution problem(variabble ,declearation)

// Immediately Invoked Function Expressions (IIFE)

// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Abhishek')