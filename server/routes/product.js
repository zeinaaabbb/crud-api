import express from "express";
const router = express.Router();
const { getProducts } = require("../controllers/product.js")

router.get("/", getProducts);
