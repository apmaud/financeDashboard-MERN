import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/products", async (req,res) => {
    try{
        // success result of 200 status to the front end
        // sending our products object that we grabbed from database and sending it to front end
        const products = await Product.find();
        res.status(200).json(products)
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;