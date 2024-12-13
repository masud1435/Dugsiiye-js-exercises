// spread Operator
const first =[1,2,3];
const second =[...first,4,5,6];
console.log(second);

// Rest Operator
function multiply(...numbers){
    return numbers.reduce((total,num)=> total*num,1);
}

console.log(multiply(1,2,3));