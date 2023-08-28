import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req,res) => {
    try{
        // success result of 200 status to the front end
        // sending our kpis object that we grabbed from database and sending it to front end
        const transactions = await Transaction.find()
            .limit(50)
            .sort({ createdOn: -1});
        res.status(200).json(transactions)
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;