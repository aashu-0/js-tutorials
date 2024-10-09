//  const name = "aashutosh"
//  const repoCount = 8

//  console.log(name + repoCount + "Value");
// not reccomended

// console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);
// called as string interpolation

const gameName = new String('aashutosh-mishra-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-16,7)
// console.log(anotherString);

// const newStringOne = "    aashutosh     "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://aashum.com/aashutosh%20mishra"

console.log(url.replace('%20', '-'));

console.log(url.includes('mishra'));

console.log(gameName.split('-'));