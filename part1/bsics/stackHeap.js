let Username = "Sanjay";
let anotherName = Username;
anotherName = "Sanu";

console.log(Username);
console.log(anotherName);

//Using objects non primitive heap memory

let user1 = {
    email: "user@google.com",
    upiId: "user@oksbi"
}
let user2 = user1;

user2.email = "sanjay@google.com";

console.log(user1.email);
console.log(user2.email);
