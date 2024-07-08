fs=require("fs");
fs.readFile('xy.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:"+ data.toString());
});
var data=fs.readFileSync('xy.txt');
console.log("Synchronous read:"+data.toString());
console.log("program ended");