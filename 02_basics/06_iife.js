// Immediately Invoked Function Expressions (IIFE)
//to remove global scope pollution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')