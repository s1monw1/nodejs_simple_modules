var fs = require('fs')
var path = require('path')
var dir = process.argv[2]
var filterExt = process.argv[3]
var fileExt = "." + filterExt

fs.readdir(dir, function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) == fileExt) {
            console.log(file)
        }
    })
})

