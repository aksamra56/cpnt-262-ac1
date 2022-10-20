const number = 4;
console.log("Before", number);

const squared = number ** 2;
const remainder = number % Math.PI;

console.log("After - squared", squared);
console.log("After - remainder", remainder);
console.log("After - as money", `$${number.toFixed(2)}`);
console.log(number.toPrecision(2));
console.log(number.toString());


function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2 * Math.PI ;
}

console.log(circumference('4'));
// expected output: 4

console.log(circumference('4'));
// expected output: 4
