import Mongoose from "mongoose";

// Define product schema
const ProductSchema = new Mongoose.Schema ({
  name: { type: String , required: true } ,
  description: { type: String , required: true },
  quantityAvailable: { type: Number , required: true , default: 0 },
  price: { type: Number , required: true, default: 0},
  supplier: { type: String , required: true },
  image: { type: String, required: false},
  timestamps: true
})

// Converting productSchema into a Model we can use
// We pass it into mongoose.model(modelName, schema):
export const productSchema = Mongoose.model('Product', ProductSchema)
