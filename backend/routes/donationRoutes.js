import express from "express";
import Donation from "../models/Donation.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

export default router;
