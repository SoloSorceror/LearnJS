// const coding = ["java", "js", "python", "cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item; //for each doesn't return values
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter( (num) => num > 4);
console.log(newNums);

// const newNumb = myNums.filter( (num) => {
//     // num > 4 // wont work as we are trying to return explicitly by using a {} so we have to use return keyword
//     return num > 4;
// } );
// console.log(newNums);


// Same using for each loop

// const newNumb2 =[];

// myNums.forEach((numb)=>{

//     if(numb >4){
//         newNumb2.push(numb);
//     }
// })
// console.log(newNumb2);

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.map( (nums) => nums + 10 )
// console.log(newNums);

// const newNums = myNums
//                 .map((num)=> num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)

// console.log(newNums);