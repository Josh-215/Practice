// function averageNum(arr) {
//   let total = 0;
//   arr.forEach(function (arr) {
//     return (arr += total);
//   });
// }
// console.log("hi");

// const div = document.querySelector("div");
// console.log(div.textContent);
// // when docment can't be find a typeError of null will come up
// const paragraph = document.querySelector("p");
// console.log(paragraph?.textContent); /*
//  TypeError: Cannot read properties of null (reading 'textContent'*/
/////////////////

//Merge the two lists in a one sorted list.
//1 loop through the lists and get the lowest numbers
//and compere the two numbers then add the lowest one first
//2 keep doing that until both lists are empty
//3 return merge list
//list 1 = [1,2,4]
//list 2 = [1,3,4]
// let mergeTwoLists = function (list1, list2) {
//   let mergeLists = [];
//   for (let i = 0; i < list1.length; i++) {
//     if (list1[i] < list2[i]) {
//       mergeLists.push(list1[i]);
//     } else {
//       mergeLists.push(list2[i], list1[i]);
//     }
//   }
//   return mergeLists;
// };
// make s into an array to loop through it
//find the the  order
let s = "()[]{}";
var isValid = function (s) {
  if (s.length > 2) {
    return s === "()" || s === "{}" || s === "[]";
  } else {
    let arr = s.split();
  }
};
