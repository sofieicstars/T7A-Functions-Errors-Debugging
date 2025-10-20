//
const numbers = [10, 20, 30, 40];
 

let total = 0;
function calculateSum(){
for (let num of numbers) {
  total += num;
}
let result = console.log("Total :", total);
return result;
}
 


calculateSum();
// Calculate the average
function calculateAverage(){
let average = total / numbers.length;
let resultsAverage = console.log("Average:", average);
return resultsAverage;
}
calculateAverage();