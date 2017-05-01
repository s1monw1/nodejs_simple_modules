var fs = require('fs')

var file = fs.readFile(process.argv[2], function(err, file){
    var content = file.toString();
    console.log(content.split('\n').length - 1);
});
