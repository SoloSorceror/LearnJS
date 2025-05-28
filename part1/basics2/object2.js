// const tinderUser = new Object(); //singleton object
// console.log(tinderUser);


const tinderUser = {} //non singleton object

tinderUser.id = "1234ui";
tinderUser.name = "Sanjay";
tinderUser.isLoggedIn = false;

//you can do nesting also inside a object
const regularUser = {
    email: "Sanjay@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Sanjay",
            lastName: "Chetry"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);

//You can combine Objects in multiple ways

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"b", 6:"c"}
const obj3 = {7:"a", 8:"b", 9:"c"}

const obj4 = Object.assign(obj1,obj2,obj3)
const obj5 = Object.assign({},obj1,obj2,obj3)

// when you put {} then the values are all put in empty object and assigned to the obj4 but if you dont put then it is assigned to obj1 first and then assigned ok

const obj6 = {...obj1, ...obj2, ...obj3} //widely used, spread operator
console.log(obj6);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));