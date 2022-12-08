const express=require("express")

const app =express()

app.get("/",(req,res)=>{
    res.send("here from express");

});

app.listen(3000)


// const http=require("http")
// const server=http.createServer((req,res)=>{
// console.log("request coming");
//         res.setHeader("Content-type","text/html")
//         res.write("hello")
//         res.end();
// });
// server.listen(3000,"localhost",()=>{
//     console.log("listening for req on port 3000")
// })
