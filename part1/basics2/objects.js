//Two ways to declare an object as a literal and as a constructor
// singleton : means an object created through constructor
// when not declared through a constructor but a literal it is not a singleton

// object literals

// how to use symbol as a key in object

//declare a symbol
const mySym = Symbol("key1");

const jsUser = {
    UserName: "Sanjay",
    "fullName": "Sanjay Chetry",
    age: 18,
    [mySym]: "mykey1", //syntax
    location: "Guwahati",
    email: "babayaga.google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// we can access the object by using . but this might not work sometimes,
// you can use square brackets to access
// As all the keys are treated as string, so when using square bracket to access you have to give them in double dot,
// example to access values that are written like "fullName": "Sanjay Chetry" you cant access them using dot so have to use square bracket

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser."fullName"); // invalid
console.log(jsUser["fullName"]);
console.log(jsUser[mySym]); //correct syntax
console.log(mySym);

jsUser.email = "sanjay.chatgpt.com"; // change a value
// Object.freeze(jsUser); //now change wont be possible
// jsUser.email = "ai.gemini.com";
console.log(jsUser.email); // no change


jsUser.greeting = function(){
    console.log(`Hello User, ${this.UserName}`);
}

console.log(jsUser.greeting());