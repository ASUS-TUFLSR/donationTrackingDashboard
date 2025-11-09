const DonationsTable = ({ donations }) => (
  <div className="bg-white shadow rounded-lg p-5">
    <h3 className="text-lg font-semibold mb-3">Recent Donations</h3>
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border-b">Donor</th>
          <th className="p-2 border-b">Amount</th>
          <th className="p-2 border-b">Date</th>
        </tr>
      </thead>
      <tbody>
        {donations.map((d, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="p-2 border-b">{d.donorName}</td>
            <td className="p-2 border-b">${d.amount}</td>
            <td className="p-2 border-b">{new Date(d.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default DonationsTable;
