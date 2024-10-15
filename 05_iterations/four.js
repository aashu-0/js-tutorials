const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for arrays
// difference b/w arrays and object
// by default. the keys in arrays are integers and start from 0
// whereas in objects the keys acanbe anything 

const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    // console.log(programming[key]);
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);    // maps are not iterable and therefore returns nothing
// }


