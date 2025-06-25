
let arr = [10,100,89,45,784,2,4];

// let print = function(el){
//   console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((el)=>{
//     console.log(el);
// })

// arr.forEach(el => console.log(el));

let num = [1,2,3,4,5,6,7,8,9,10];
let doubled = num.map(function(el){
    return el * 2;
});

// console.log(doubled); // 

let temp = num.map((el)=>{
    return el*5;
})

// console.log(temp);

let newarr = num.filter(function(el){
          return el%2==0;
})

// console.log(newarr);

let arr2 = [1,2,3];

let ans = arr2.every(function(el){    // logical AND must have all true for the condition
    el%2==0;
})

// console.log(ans);

let ans2 = arr2.some((el)=>{       // logical OR if one can true then return true
    el%2==0;
})

// console.log(ans2);/

let ex = arr2.reduce(function(acc,el){
           return acc * el;
})

// console.log(ex);

// default parameter 

function sum(a,b=7){
    console.log(a*b);
}

// sum(2);

// ******************SPREAD**************
//  conclusion :- passes values of collections one by one.
// console.log(...arr2);
let even = [2,4,6,8];
let odd = [1,3,5,7];
let com  = [...even,...odd];
// console.log(com);

let obj = {...even}; // conversion from array to object.
// console.log(obj);

// ******************REST**************                                            spread * rest
//Allows to an infinite number of arguments and bundle them into an array.

function sum(...args){
    for(let i=0,j=1;i<args.length;i++){
    console.log(args[i]);
    }
}

// sum(1,23,4,5);

function add(msg,...args){
    console.log(msg);
    for(let i=0,j=1;i<args.length;i++){
    console.log(args[i]);
    }
}

// add("sanket",1,2,3,4,5,);

// ******************DESTRUCTURING**************      
//  Storing values of an array into multiple variables.
let names = ["sanket", "pranav", "avishkar" , "akash" , "sahil" , "mayur"];
let [winner , runner_up , secondrunner_up] = names;
// console.log(winner,runner_up,secondrunner_up);

// let [winner , runner_up , ...others] = names;   // stores remaining elements in others using rest concept.
// console.log(others);

let student={
    name:"sank",
    pass:1234,
    sub:"math",
    username:"xyz@bhai",
};

let {name , pass:password } = student;
console.log(password);