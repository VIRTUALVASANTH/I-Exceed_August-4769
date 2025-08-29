const testString = "a aa aaa aaaa aaaaa ab ac abc abcd";

// Array of regex tests using different quantifiers
const tests = [
  { regex: /a*/g, description: "0 or more 'a's (a*)" },
  { regex: /a+/g, description: "1 or more 'a's (a+)" },
  { regex: /a?/g, description: "0 or 1 'a' (a?)" },
  { regex: /a{3}/g, description: "Exactly 3 'a's (a{3})" },
  { regex: /a{2,}/g, description: "At least 2 'a's (a{2,})" },
  { regex: /a{2,4}/g, description: "Between 2 and 4 'a's (a{2,4})" }
];

// Run each regex test and print the results
tests.forEach(({ regex, description }) => {
  const matches = testString.match(regex);
  console.log(`\n${description}:`);
  console.log(matches);
});