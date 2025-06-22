
// function cal(a,b){
//   let sum = a + b;
//   console.log(sum);
// }

// cal(2,5);
// console.log(sum);// not possible


// function cal(a,b){
//   var sum = a + b;
//   console.log(sum);
// }

// cal(2,5);
// console.log(sum); // not possible

// {
//     let sum = 5;
// }
// console.log(sum); // not possile 

// {
//     var sum = 5;
// }
// console.log(sum); // possible
// let students = {
//     name:"sanket",
//     age:20,
//     qualification:"bsc cs"
// };

// let students = {
//     sanket:{
//     age:20,
//     qualification:"bsc cs"
//     },

//     pranav:{
//     age:20,
//     qualification:"bsc cs"
//     }
// };


let students = [
    {
    name : "sanket",
    age:20,
    qualification:"bsc cs"
    },

    {
     name : "pranav",
    age:288,
    qualification:"bsc+cs"
    }
];

students[1].name = "sanket kumar";
console.log(students);
// students.sanket.qualification = "msc cs";
// console.log(students);