const input = "josh is amazing";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  // console.log('i = '  + input[i])
  for (let v = 0; v < vowels.length; v++) {
    // console.log('v = ' + v);
    if (input[i] === vowels[v]) {
      if (input[i] === "e") {
        resultArray.push("ee");
      } else if (input[i] === "u") {
        resultArray.push("uu");
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join("").toUpperCase());
