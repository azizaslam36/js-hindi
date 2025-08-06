const accountId = 144553
let accountEmail = "azizaslam59gmail.com"
var accountpassword = "1234567890"
acccountCity = "New Delhi"
let accountstate;

console.table([accountId, accountEmail, accountpassword, acccountCity]);

// accountId = 2  // not allowed, const cannot be reassigned
accountEmail = "hc@hc.com" // allowed, let can be reassigned
accountpassword = "985632144" // allowed, var can be reassigned
acccountCity = "Mumbai" // allowed, var can be reassigned

console.table([accountId, accountEmail, accountpassword, acccountCity, accountstate]);
/* 
prefer not to use var 
*/