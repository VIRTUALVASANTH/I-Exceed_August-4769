let fruits = ['apple', 'banana', 'cherry'];

console.log("Original array:", fruits);

fruits.push('orange');
console.log("After push:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.unshift('mango');
console.log("After unshift:", fruits);

fruits.shift();
console.log("After shift:", fruits);

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("After map (uppercase):", upperFruits);

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("After filter (length > 5):", longFruits);

console.log("Using forEach:");
fruits.forEach(fruit => console.log(fruit));

console.log("Includes 'banana'?", fruits.includes('banana'));

console.log("Joined string:", fruits.join(', '));