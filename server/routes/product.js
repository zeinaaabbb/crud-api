import express from "express";
const router = express.Router();
import { Product } from "../models/product.js";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.js"

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
