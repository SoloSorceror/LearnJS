const prog = ["js", "rb", "bababoss", "hello" ];

//Note
// prog.forEach( function (item){
//     console.log(item);
// })

// prog.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }
// prog.forEach(printMe)

// prog.forEach( (item,index, arr)=>{
//     console.log(item,index,arr);
// } )

const arr1 = [
    {
        languageName : "javascript",
        languageFile : ".js"
    },
    {
        languageName : "javascript",
        languageFile : ".js"
    },
    {
        languageName : "javascript",
        languageFile : ".js"
    },
]

arr1.forEach((item)=> {
    console.log(item.languageName);
})
