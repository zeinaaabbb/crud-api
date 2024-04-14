import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";
import { Product } from "./models/product.js";

dotenv.config();

const app = express();

//middleware
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello, from API")
});

app.post("/api/products", async (req, res) => {
  // console.log(req.body)
  // res.send(req.body)
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
