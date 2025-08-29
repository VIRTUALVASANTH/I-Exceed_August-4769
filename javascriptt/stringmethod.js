stringmethod.js

function exploreStringMethods() {
  const original = "  JavaScript is Awesome!  ";
  const text = "hello world";
  const csv = "red,green,blue";
  const spaced = "   lots of space   ";
  const mixedCase = "HeLLo";
  const repeated = "abcabcabc";
  const numString = "12345";
  const specialChars = "A man, a plan, a canal, Panama!";

  console.log("Original String:", `"${original}"`);
  console.log("=".repeat(50));

  // Length
  console.log("Length:", original.length);

  // charAt and charCodeAt
  console.log("charAt(4):", original.charAt(4));
  console.log("charCodeAt(4):", original.charCodeAt(4));

  // indexOf and lastIndexOf
  console.log("indexOf('is'):", original.indexOf("is"));
  console.log("lastIndexOf('a'):", original.lastIndexOf("a"));

  // includes, startsWith, endsWith
  console.log("includes('Script'):", original.includes("Script"));
  console.log("startsWith('  Java'):", original.startsWith("  Java"));
  console.log("endsWith('!  '):", original.endsWith("!  "));

  // trim, trimStart, trimEnd
  console.log("trim():", `"${original.trim()}"`);
  console.log("trimStart():", `"${original.trimStart()}"`);
  console.log("trimEnd():", `"${original.trimEnd()}"`);

  // toUpperCase, toLowerCase
  console.log("toUpperCase():", original.toUpperCase());
  console.log("toLowerCase():", original.toLowerCase());

  // replace, replaceAll
  console.log("replace('Awesome', 'Powerful'):", original.replace("Awesome", "Powerful"));
  console.log("replaceAll('a', '@'):", repeated.replaceAll("a", "@"));

  // split and join
  console.log("split by space:", original.trim().split(" "));
  console.log("split CSV:", csv.split(","));
  console.log("join with -:", csv.split(",").join("-"));

  // slice, substring, substr
  console.log("slice(2, 10):", original.slice(2, 10));
  console.log("substring(2, 10):", original.substring(2, 10));
  console.log("substr(2, 5):", original.substr(2, 5)); // deprecated but works

  // concat
  console.log("concat():", "Hello".concat(" ", "World"));

  // repeat
  console.log("repeat(3):", "Ha!".repeat(3));

  // padStart, padEnd
  console.log("padStart(10, '*'):", text.padStart(10, "*"));
  console.log("padEnd(10, '*'):", text.padEnd(10, "*"));

  // localeCompare
  console.log("localeCompare('HELLO'):", text.localeCompare("HELLO"));

  // match & matchAll
  const match = repeated.match(/abc/g);
  console.log("match(/abc/g):", match);

  const matchAll = [...repeated.matchAll(/abc/g)];
  console.log("matchAll(/abc/g):", matchAll.map(m => m[0]));

  // search
  console.log("search('Script'):", original.search("Script"));

  // toString & valueOf
  console.log("toString():", original.toString());
  console.log("valueOf():", original.valueOf());

  // normalize (for Unicode)
  const accented = "\u00E9"; // é
  const combined = "e\u0301"; // also é
  console.log("normalize():", accented === combined); // false
  console.log("after normalize():", accented.normalize() === combined.normalize()); // true

  // fromCharCode
  console.log("fromCharCode(72, 101, 108, 108, 111):", String.fromCharCode(72, 101, 108, 108, 111));

  // String with template literal
  const name = "Alice";
  console.log(`Template literal: Hello, ${name}!`);

  // Custom: Clean and check palindrome
  const clean = specialChars.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  console.log(`Is palindrome?`, clean === reversed);
}

exploreStringMethods();
