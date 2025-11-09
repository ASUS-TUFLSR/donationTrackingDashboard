import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Donation from "./models/Donation.js";

dotenv.config();
await connectDB();

const donations = [
  { donorName: "Alice", amount: 100, date: new Date("2025-10-01") },
  { donorName: "Bob", amount: 250, date: new Date("2025-10-05") },
  { donorName: "Charlie", amount: 75, date: new Date("2025-10-12") },
  { donorName: "David", amount: 150, date: new Date("2025-10-20") },
  { donorName: "Emma", amount: 50, date: new Date("2025-11-02") },
];

await Donation.deleteMany();
await Donation.insertMany(donations);
console.log("✅ Dummy data seeded");
process.exit();
