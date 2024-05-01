import { Product } from "../models/product";

const getProducts = async(req, res) => {
  async(req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

module.exports = {
  getProducts
}
