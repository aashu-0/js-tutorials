const accountId = 144553
let accountEmail = "aashutosh.nitj@gmail.com"
var accountPassword = "12345"   //var not used in js nowadays reason: scope
accountCity = "Jaipur" // possible but not reccomended
let accountState;

// accountId = 2  not allowed

/*
Prefer not to use var beacause of issue in block scope and functional scope
*/

accountEmail = "heyaashutosh@outlook.com"
accountPassword = "007007"
accountCity = "Lucknow"

console.log(accountId);

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])