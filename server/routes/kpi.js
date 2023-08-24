import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req,res) => {
    try{
        const kpis = await KPI.find();
        res.status(200).json(kpis)  // success result of 200 status to the front end
                                    // sending our kpis object that we grabbed from database and sending it to front end
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;