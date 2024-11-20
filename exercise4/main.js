// 1.Function Basics:
    
//     Create a function named `add` that takes two parameters and returns their sum. Test the function by calling it with different arguments.
    
// 2.Function Expressions:
    
//     Convert the `add` function to a function expression and call it with different arguments.

// 1.Function Basics:
function add (x,y){
    return x + y;
}

let sum = add(10,2); 
console.log("sum="+ sum); // output: 12


// 2. Function Expressions:

let adding = function(a,b){
    return a + b;
}

let result = adding(8,7);
console.log( "result=" + result); // output: 15