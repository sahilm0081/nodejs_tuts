const express = require("express");
var morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog.js");

const app = express();

const dbUrl =
   "";
mongoose.set("strictQuery", false);
mongoose
   .connect(dbUrl)
   .then(() => {
      console.log("in connect");
      app.listen(3000);
   })
   .catch((error) => {
      console.log(error);
   });

// . adding data to blog collection on get request

app.get("/add-data", (req, res) => {
   const blog = new Blog({
      title: "new adding",
      body: "data body",
   });
   blog
      .save()
      .then((res) => {
         console.log(res);
      })
      .catch((err) => {
         console.log(err);
      });
   res.send("done");
});
