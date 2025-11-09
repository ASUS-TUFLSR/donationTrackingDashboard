import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donorName: String,
  amount: Number,
  date: Date,
});

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
