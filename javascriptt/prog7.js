// Example variables as strings and numbers
let strNum = "50";
let num = 40;

// Implicit conversion in relational operation
console.log(strNum > num);  
// Output: true
// Explanation: "50" (string) is implicitly converted to 50 (number) during comparison

// Explicit conversion before relational operation
let convertedStrNum = Number(strNum);
console.log(convertedStrNum > num);  
// Output: true
// Explanation: we explicitly convert "50" to number before comparing

// Another example with boolean conversion
let strBool = "true";
let boolVal = true;

// Implicit conversion (here, JS does NOT convert "true" string to boolean true in relational ops)
console.log(strBool == boolVal);  
// Output: false (because "true" != true)

// Explicit conversion for comparison
console.log(Boolean(strBool));  
// Output: true, because non-empty strings convert to true

// More explicit example converting string to number, then comparing
let strAge = "18";
let legalAge = 21;

if (Number(strAge) >= legalAge) {
  console.log("Allowed");
} else {
  console.log("Not allowed");
}
// Output: Not allowed