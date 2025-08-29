// combining-data-conversion-relational-ops.js

console.log("=== Implicit Conversion Examples ===");

let a = "100";
let b = 50;

console.log(`"100" > 50: ${a > b}`); // true - string "100" is implicitly converted to number 100

let str1 = "5";
let str2 = "100";
console.log(`"5" > "100": ${str1 > str2}`); // true - lexicographical comparison

console.log("=== Explicit Conversion Examples ===");

let num1 = Number(str1);
let num2 = Number(str2);
console.log(`Number("5") > Number("100"): ${num1 > num2}`); // false - correct numeric comparison

let inputAge = "17";
let legalAge = 18;
console.log(`User age "${inputAge}" >= ${legalAge}: ${Number(inputAge) >= legalAge}`); // false

console.log("=== Boolean Conversion Examples ===");

let boolString = "true";
let boolLiteral = true;

console.log(`"true" == true: ${boolString == boolLiteral}`); // false - string vs boolean
console.log(`Boolean("true") == true: ${Boolean(boolString) == boolLiteral}`); // true

let empty = "";
console.log(`Boolean(""): ${Boolean(empty)}`); // false
console.log(`"" == false: ${empty == false}`); // true - JS coerces empty string to false

console.log("=== Null, Undefined, NaN Comparisons ===");

console.log(`null > 0: ${null > 0}`); // false
console.log(`null == 0: ${null == 0}`); // false
console.log(`null >= 0: ${null >= 0}`); // true - weird but true because null is coerced to 0

console.log(`undefined > 0: ${undefined > 0}`); // false
console.log(`undefined == 0: ${undefined == 0}`); // false

console.log("=== Real-World Example: Quantity Check ===");

let quantity = "0";
let available = 10;

if (Number(quantity) > 0 && Number(quantity) <= available) {
  console.log("Valid quantity.");
} else {
  console.log("Invalid quantity."); // This will be printed
}

console.log("=== Final Function Example ===");

function canBuy(ageInput, minAge) {
  if (Number(ageInput) >= minAge) {
    return "Access granted.";
  } else {
    return "Access denied.";
  }
}

console.log(`canBuy("20", 18): ${canBuy("20", 18)}`);       // Access granted.
console.log(`canBuy("sixteen", 18): ${canBuy("sixteen", 18)}`); // Access denied. ("sixteen" => NaN)
