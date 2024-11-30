const peaple= [
    {name: "Masud", Age:21, city:"Egypt"},
    {name: "Mahmoud", Age:22, city:"Hargeisa"},
    {name: "Mohamed", Age:23, city:"Mogadisho"}
];
// for (let p of peaple) {
//     for(const key in peaple) {
//         // console.log(  key + ": " + peaple[key]);
//     };
//     console.log(p);
// };

for (const person of peaple) {
    for (const key in person) {
        console.log(key + ': ' + person[key]);
    }
    console.log("-------------");
}

