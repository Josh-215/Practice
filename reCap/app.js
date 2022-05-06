// // setTimeout(()=>{
// //   const move = document.getElementById('div1')
// //   move.classList.add('endingPosition')
// // },2000)
// class Person {
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//   }
//   getFullName() {
//     return `${this.first} ${this.last}`;
//   }
// }

// let person = new Person("joshua", "urquhart");

// // a 5 second delay
// setTimeout(() => {
//   console.log(person.getFullName());
// }, 5000);

function averageNum(arr) {
  let total = 0;
  arr.forEach(function (arr) {
    return (arr += total);
  });
}
