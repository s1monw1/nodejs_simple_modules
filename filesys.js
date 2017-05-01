var fs = require('fs')

var file = fs.readFileSync(process.argv[2]);
var content = file.toString();
console.log(content.split('\n').length - 1);