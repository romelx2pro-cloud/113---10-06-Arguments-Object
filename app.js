// //The arguments object is available in every function you write (except arrow functions)
// //It contains all the arguments passed in.
// function sum() {
//   //It is NOT an array, we have to turn it into one if we want to use array methods
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// // No arguments object inside of arrow functions :(
// const multiply = () => {
//   console.log(arguments);
// }
function s() {
  const ar = [...arguments];
  return ar.reduce((a, c) => a + c);
}
console.log(s(1, 2, 3, 4));
