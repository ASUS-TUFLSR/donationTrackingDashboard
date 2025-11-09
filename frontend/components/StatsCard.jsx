const StatsCard = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-5 text-center">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);
export default StatsCard;
