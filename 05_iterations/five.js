const coding = ['js','ruby','java','python','cpp']

// coding.forEach( function (val) {    //callback function has no name 
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)   // only give reference to the function like printMe not printMe()

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);    // for Each has many other values like index, Arr
// })


const myCoding = [             // array of objects
    {
        languaugeName: 'javascript',
        languaugeFilename: 'js'
    },
    {
        languaugeName: 'java',
        languaugeFilename: 'java'
    },
    {
        languaugeName: 'python',
        languaugeFilename: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languaugeName)
})
