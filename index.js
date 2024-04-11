import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.get("/", (req, res) => {
  res.send("Hello, from API")
});

//mongoDB connect then listen to app server at port
mongoose.connect(process.env.MongoDB)
.then(() => {
  console.log("Mongo DB connected!");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
})
.catch(() => {
  console.log("Connection failed")
});
