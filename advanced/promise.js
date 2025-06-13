// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task 1 is complete");
//     },1000)
//     resolve() // connect to .then
// })

// //use to consume promise
// promiseOne.then(function(){
//     console.log("Promise is consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promise3 = new Promise(function(resolve,reject){
//    setTimeout(function(){
//     resolve({username:"Sanjay", email:"sanjaychetry@google.com"})
//    },1000)
// })

// promise3.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Sanjay", password:"12234"})
//         }else{
//             reject("Error something went wrong")
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}