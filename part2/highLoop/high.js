// for of

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }


// const greetings = "Hello Sanjay!";
// for(greet of greetings){
//     console.log(greet);
// }

//Maps
//The map object holds key-value pairs and remember the original insertion order of the keys. Any value (both object and primitive values) may be used as a key or a value.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("Eng", "England")
map.set("Eng", "England")
map.set("Eng", "Engand")

// console.log(map);

// for(const [key, value] of map){
//     console.log(key, ':-', value);
// }

// for (const key in map) {
//     console.log(`${key} stands for ${map[key]}`);
// }


// object aren't iterable by for of loop like it is in case of maps

//for of returns values for in return keys

const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
}

// const prog = ["js", "rb", "bababoss", "hello" ];

// for(const key in prog){
//     //arrays also have key that start from 0 and in object we can set key ourself
//     console.log(key);
//     console.log(prog[key]);
// }