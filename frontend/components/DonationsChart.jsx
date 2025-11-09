import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const DonationsChart = ({ donations }) => {
  const data = {
    labels: donations.map((d) => new Date(d.date).toLocaleDateString()),
    datasets: [
      {
        label: "Donation Amount",
        data: donations.map((d) => d.amount),
        borderColor: "#3b82f6",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded-lg p-5">
      <h3 className="text-lg font-semibold mb-3">Donation Trends</h3>
      <Line data={data} />
    </div>
  );
};

export default DonationsChart;
