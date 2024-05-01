import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";
import { Product } from "./server/models/product.js";

dotenv.config();

const app = express();


app.get("/", (req, res) => {
  res.send("Hello, from API")
});

//get all
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//get one
app.get("/api/product/:id", async(req,res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a product
app.put("/api/product/:id", async(req,res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "product does not exist!"})
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);


  } catch(error) {
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
