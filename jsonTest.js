var fs = require("fs");
var contents = fs.readFileSync("config.json");
var config = JSON.parse(contents);

console.log('USB Port :'+config.usb4.port);
console.log('Server Port :'+config.server.port);
console.log('Server Address :'+config.server.address);