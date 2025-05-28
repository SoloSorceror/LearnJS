const user = {
    username: "Sanjay",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage();

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5,6));

