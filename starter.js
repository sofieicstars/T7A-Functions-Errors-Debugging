// Calculate totals from an array

const numbers = [10, 20, 30, 40];


let total1 = 0;
for (let num of numbers) {
  total1 += num;
}
console.log("Total 1:", total1);

let total2 = 0;
for (let num of numbers) {
  total2 += num;
}
console.log("Total 2:", total2);

// Calculate the average
let average = total / numbers.length;
console.log("Average:", average);
