//***************LET VAR SCOPE************** *
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

//**********OBJECTS************************** */
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

// let students = [
//     {
//         name: "sanket",
//         age: 20,
//         qualification: "bsc cs"
//     },
//     {
//         name: "pranav",
//         age: 20,
//         qualification: "bsc cs"
//     }
// ]

// ***********FUNCTIONS***************

// function cal(a,b){
//     let sum = a + b;
//     return sum;
// }
// let result2 = cal(2,5);
// console.log(result2); // 

// let sum = function(){
//     let a = 9;
//     let b = 5;
//     return a + b;
// }
// let result = sum();
// console.log(result); // 7
// console.log(sum); // 14

// let sum = (a,b) => {
//     return a + b;
// };
// let result = sum(999,1);
// console.log(result); // 7

// let sum2 = (a,b) => a + b;
// let result2 = sum2(999,1);
// console.log(result2); // 7

// let ex = {
//     c: 10,
//     d: 20,
//     sum: function() {
//         return this.c + this.d;
//     }
// }
// let result = ex.sum();
// console.log(result); // 30

// let ex1 = {
//     c: 10,
//     d: 20,
//     sum: () => {
//         return this.c + this.d;
//     }
// }
// let result2 = ex1.sum();
// console.log(result2); // NAN

//*********************** */ HIGHER ORDER FUNCTION**********************************
// function greet(name) {
//   return "Hello, " + name;
// }

// function processUserInput(callback) {
//   let name = "Alice";
//   console.log(callback(name));
// }

// processUserInput(greet); // 👉 "Hello, Alice"

// function add(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// console.log(add(2)(3)); // 👉 5

// console.log("Hii ,There!!!");

// setTimeout(()=>{
//   console.log("Apna College!!!");
// },1);


// setTimeout(sum=()=>{
//    console.log(2*5);
// },4000);

// console.log("WelCome to");
// console.log("WelCome to");
// console.log("WelCome to");
// console.log("WelCome to");

// let sum = () => {
//     console.log(2+5);
// };

// sum();

// let id = setInterval(()=>{
//   console.log("SPPU");
// },1000);

// clearInterval(id);

// let students = {
//     name : "sanket",
//     marks: 50,
//     prop : this,// window object
//     getMark : function(){
//      console.log(this.marks); //refer student object's marks
//     },
//     getName : ()=>{
//      console.log(this.name); //refer to window object
//     }
// }
// students.getMark();
// students.getName();

