import express from "express";
const router = express.Router();
import { Product } from "../models/product.js";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

//read
router.get("/", getProducts);
router.get("/:id", getProduct);
//cread
router.post("/", createProduct);
//update
router.put("/:id", updateProduct);
//delete
router.delete("/:id", deleteProduct);

module.exports = router;
