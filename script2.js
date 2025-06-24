
let arr = [10,100,89,45,784,2,4];

// let print = function(el){
//   console.log(el);
// }

// arr.forEach(print);

arr.forEach(function(el){
    console.log(el);
})

// arr.forEach((el)=>{
//     console.log(el);
// })

// arr.forEach(el => console.log(el));

let num = [1,2,3,4,5,6,7,8,9,10];
let doubled = num.map(function(el){
    return el * 2;
});

console.log(doubled); // 