const accountId = 144533
let accountEmail ="prikshit@google.com"
var accountPassword="12345"
accountCity = "jaipur"

// accountId=0 cant change cause its const
console.log(accountId);
accountEmail="hc@gmail.com" // we can change
console.log(accountEmail);
accountPassword="987"
accountCity="delhi"

console.table([accountEmail,accountPassword,accountCity])