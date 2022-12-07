// file system module
const fs =require("fs");


//read file
//sync function
fs.readFile("./read.json",(err,data)=>{
   if(err){
       console.log(err);
   }
    console.log("Reading file in buffer")

});

//write file
fs.writeFile("./read.txt","hi",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("writing file data")

});



