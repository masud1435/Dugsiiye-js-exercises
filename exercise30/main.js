function operate(a,b,callback) {
    return callback(a,b);
}
function add(a,b){
    return a+b;
}
function subrtact(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

console.log("Addition:",operate(10,5,add))
console.log("Subtract:",operate(10,5,subrtact))
console.log("Multiply:",operate(10,5,multiply))
console.log("Divide:",operate(10,5,divide))