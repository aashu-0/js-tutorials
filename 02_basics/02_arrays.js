const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heores = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heores)  // not a god practice to merge arrays
                                 // push returns the same array
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

allHeros = marvel_heros.concat(dc_heores)  // concat create new array
// console.log(allHeros);

const allNewHeros = [...marvel_heros,...dc_heores]

// console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // in place of Infinity we can pass the depth in num, say 3
// console.log(real_another_array)


console.log(Array.isArray("Aashutosh"));
console.log(Array.from("Aashutosh"));
console.log(Array.from({name: "aashutosh"}));   //interesting case,need to specify either keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));