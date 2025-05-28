//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(typeof myDate);
console.log(myCreatedDate.getDay());

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("01-14-2025")
let myCreatedDate4 = new Date("01-02-2025")
let myCreatedDate5 = new Date("24-02-2025")
let myCreatedDate6 = new Date("2024-02-14")
console.log(myCreatedDate4.toString());
console.log(myCreatedDate5.toString()); //invalid
console.log(myCreatedDate6.toString()); 

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// how to convert to seconds and millisec

myDate.toLocaleString('default', {
    weekday: "long",
    //etc
})