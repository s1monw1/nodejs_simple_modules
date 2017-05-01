
var sum = 0;
for(var i=2;i<process.argv.length; i++){
    var x = +process.argv[i];
    sum+=x;
}
console.log(sum)