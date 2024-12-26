// Blocking/synchronous code 
// console.log("Blocking/synchronous code ")
// console.log("================================");
// function blockingCode() {
//     alert("Do you really want to go ahead ")
//     return {id:1,name:"Masud"}
// };
// console.log("before blocking code");
// const user = blockingCode();
// console.log(user);
// console.log("after blocking code");


// Non-blocking/asynchronous code
console.log("Non-blocking/asynchronous code")
console.log("================================");

function nonBlockingCode(calback) {
    setTimeout(()=>{
        const users={id:2,name:"Ali"}
        calback(users);

    },3000)

};
console.log("welcome");
nonBlockingCode(function(users){
    console.log(users)
})
