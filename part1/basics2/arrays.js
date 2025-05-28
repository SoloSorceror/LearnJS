const fruits =["apple", "bananana", "grapes"];
const numbers = new Array(1,2,2,"cherry");

const mixed = [1,2,3, null,{name: "js"}, [2,3]];

console.log(fruits[0]);
console.log(mixed.length);
mixed.push("d");
console.log(mixed[6]);

const matrix = [
    [1,2],
    ["sanjay", "jiya"]
];
console.log(matrix[1][1]);

const [first, second, sanjay] = fruits;
console.log(sanjay); // "apple"

console.log(Array.isArray(fruits));  