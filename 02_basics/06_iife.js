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





//*******************javascript execution context******************* */

/*
{} => global E.C
 => function E.C
 => eval E.C

 {}=>created in 2 phases 
 1.memory creation phase
 2.execution phase


 new variable enviroment +execution thread

 //watch at 6hrs5mins to recap
*/