import { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "../components/StatsCard";
import DonationsChart from "../components/DonationsChart";
import DonationsTable from "../components/DonationsTable";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/donations").then((res) => {
      setDonations(res.data);
    });
  }, []);

  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalDonors = new Set(donations.map((d) => d.donorName)).size;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Donation Tracking Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard title="Total Donations" value={`$${totalDonations}`} />
        <StatsCard title="Total Donors" value={totalDonors} />
      </div>

      <DonationsChart donations={donations} />
      <DonationsTable donations={donations} />
    </div>
  );
};

export default Dashboard;
