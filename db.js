import mongoose from "mongoose";

const URL = 'mongodb://localhost:27017/ecommerce'

export const db = mongoose.connect(URL, {
 useNewUrlParser: true
})

const productSchema = new mongoose.Schema({
    title: {type: String, required: true, max: 25},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    thumbnail: {type: String, required: true},
    code: {type: String, required: true, max: 10},
    description: {type: String, required: true, max: 100},
})

export const productsModel = mongoose.model("Products", productSchema);

const cartSchema = new mongoose.Schema({
    products: {type: [{
       id: {type: String, required: true, max: 25},
       products: {type: String, required: true},
    }]}
}, { timestamps: true })

export const cartModel = mongoose.model("Carts", cartSchema);