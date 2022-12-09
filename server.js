const express = require("express");
var morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

// app.use((req, res, next) => {
//    console.log("in middleware");
//    next();
// });

app.use(morgan("dev"));
app.get("/", (req, res) => {
   res.render("index", { title: "Main Page" });
});

app.get("/about", (req, res) => {
   res.render("about", { title: "About Page" });
});

app.listen(3000);

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
