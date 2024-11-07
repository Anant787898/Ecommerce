import {LineChart} from "@mui/x-charts/LineChart";
function Home() {
  return (
    <div className="flex justify-between h-screen p-2 bg-gray-200 w-[74vw]">
      {/* LEFT */}
      <div className="flex flex-col w-2/3">
        <div className="flex ">
          <div className="bg-white h-52 w-60 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-blue-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">699</h2>
            </div>
            <h2 className="font-semibold text-xl">Orders</h2>
          </div>

          <div className="bg-white h-52 w-60 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-red-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">200</h2>
            </div>
            <h2 className="font-semibold text-xl">Products</h2>
          </div>

          <div className="bg-white h-52 w-60 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-orange-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">300</h2>
            </div>
            <h2 className="font-semibold text-xl">Users</h2>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white m-5 p-5 rounded-lg ">
          <div className="p-6 bg-white rounded-md ">
            <h3 className="text-lg font-bold mb-4">Latest Transactions</h3>
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100 ">
                <tr>
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b ">
                  <td className="py-2 px-4">Anant Kumar</td>
                  <td className="py-2 px-4">$299</td>
                  <td className="py-2 px-4 text-[red]">Pending</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Ashutosh Pal</td>
                  <td className="py-2 px-4">$199</td>
                  <td className="py-2 px-4 text-[green]">Approved</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Aditya Pal</td>
                  <td className="py-2 px-4">$399</td>
                  <td className="py-2 px-4 text-[red]">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col w-1/3 bg-white p-5 shadow-xl rounded-lg">
        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-xl">Total Revenue: $100,000</h2>
        </div>

        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-xl">Total Losses: $0</h2>
        </div>

        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, -5.5, 2, -7.5, 1.5, 6],
            },
          ]}
          height={350}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </div>
    </div>
  );
}

export default Home;
